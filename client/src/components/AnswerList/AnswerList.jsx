import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { StoreContext } from "../..";
import s from "../../css/AnswerList.module.css";
import {
  dislikeAnswerTC,
  fetchAnswersTC,
  likeAnswerTC,
} from "../../Redux/ActionCreators/answerAC";
import { addReportTC } from "../../Redux/ActionCreators/reportAC";
import Answer from "./Answer";

const AnswerList = (props) => {
  const store = useContext(StoreContext);
  const [answers, setAnswers] = useState(null);
  const [isAuth, setAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchQuestionAnswers = () => {
    store.dispatch(fetchAnswersTC(props.questionId, null));
  };

  const fetchProfileAnswers = () => {
    store.dispatch(fetchAnswersTC(null, props.userId));
  };


  const likeAnswer = (answerId) => {
    store.dispatch(likeAnswerTC(answerId));
  };

  const dislikeAnswer = (answerId) => {
    store.dispatch(dislikeAnswerTC(answerId));
  };

  useEffect(() => {
    if (!props.profileAnswers) {
      fetchQuestionAnswers();
    }

    if (props.profileAnswers) {
      fetchProfileAnswers();
    }
  }, []);


  store.subscribe(() => {
    setAnswers(store.getState().answerPage.answers);
    setAuth(store.getState().authPage.isAuth);
    setIsLoading(store.getState().authPage.isLoading);
  });

  const addReport = (answerId) => {
    if ( window.confirm("Пожаловаться на ответ?")) {
      store.dispatch(addReportTC(answerId, null));
    }
  };


  if(isLoading){
    return <Spinner/>
  }

  return (
    <>
      {isAuth ? (
        <>
          <div className={s.best_answer_block_wrapper}>
            <h3>Лучший ответ</h3>
            {props.bestAnswer ? (
              <Answer
                likeAnswer={likeAnswer}
                dislikeAnswer={dislikeAnswer}
                addReport={addReport}
                key={props.bestAnswer?.id}
                answer={props.bestAnswer}
              />
            ) : (
              <>Ответов пока нету</>
            )}
          </div>

          <>
            {answers?.map((answer) => (
              <Answer addReport={addReport} likeAnswer={likeAnswer} dislikeAnswer={dislikeAnswer} key={answer.id} answer={answer} />
            ))}
          </>
        </>
      ) : (
        <h4 className="mb-3" style={{ color: "red", margin: "auto", textAlign:"center" }}>
          Авторизируйтесь чтобы посмотреть ответы!
        </h4>
      )}
    </>
  );
};

export default AnswerList;
