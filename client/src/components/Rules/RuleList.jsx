import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { StoreContext } from "../..";
import s from "../../css/RulesPage.module.css";import { fetchRulesTC } from "../../Redux/ActionCreators/ruleAC";
;

const RuleList = (props) => {

  const store = useContext(StoreContext);

  const [rules, setRules] = useState([]);

  const fetchRules = () => {
    store.dispatch(fetchRulesTC());
  };

  useEffect(() => {
    fetchRules();
  }, []);

  store.subscribe(() => {
    setRules(store.getState().rulePage.rules);
  });

  return (
    <div>
      <div>
        <div className={s.rules_wrapper}>
          <span id={s.title}>Кодекс правил</span>

          <div>
            <span className={s.green_text}>Основное правило для вопросов</span>
            <p>
              Вопрос должен являться "вопросом" и предполагать развёрнутый ответ
              на него. Если вопрос не подразумевает развёрнутого ответа,
              оформляйте его в виде опроса.
            </p>
          </div>

          <div>
            <span className={s.green_text}>Основное правило для ответов</span>
            <p>
              Ответы должны быть информативными. Например: ваши ответы "Я тоже
              так хочу", "Не знаю" или "Прикольно" не несут в себе никакой
              полезной информации для того, кто задал вопрос. Старайтесь
              отвечать информативно.
            </p>
          </div>

          <div>
            <ul>
              <span className={s.red_text}>Нельзя</span>
              {rules?.map((rule) => (
                <li  className="mb-3">
                  <h6>{rule.title}</h6>
                  <span>{rule.body}</span>
                 </li>
              ))}
            </ul>
          
          </div>

          <div>
            <span className={s.red_text}>Отказ в доступе </span>
            <p>
              За многократное нарушение настоящего Кодекса правил пользователю
              может быть временно закрыт доступ на проект.Доступ на проект
              закрывается на время, в зависимости от степени тяжести нарушений
            </p>
            <p>Не нарушайте правила и все будет отлично :-)</p>
            <p>
              Администрация оставляет за собой право не отвечать на сообщения.
            </p>
          </div>
        </div>
        <button
          id={s.button_up}
          type="button"
          className="btn btn-outline-success"
        >
          <i className="bi bi-chevron-up"></i>
        </button>
      </div>
    </div>
  );
};

export default RuleList;
