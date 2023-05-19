import { addBan, deleteBan } from "../../http/banAPI";
import { addReport, deleteReport, fetchAllReports, fetchAnswerReports, fetchQuestionReports } from "../../http/reportAPI";
import { DELETE_REPORT, FETCH_ALL_REPORTS, FETCH_ANSWER_REPORTS, FETCH_QUESTION_REPORTS } from "../../utils/AC_consts";




//fetch all reports
export const fetchAllReportsAC = (reports) => {
  return {
    type: FETCH_ALL_REPORTS,
    reports: reports,
  };
};


export const fetchAllReportsTC = (answerId, questionId, userId) => {
  return (dispatch) => {
    fetchAllReports(answerId, questionId, userId)
      .then((reports) => {
        dispatch(fetchAllReportsAC(reports));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};


//fetch q reports
export const fetchQuestionReportsAC = (reports) => {
  return {
    type: FETCH_QUESTION_REPORTS,
    reports: reports,
  };
};


export const fetchQuestionReportsTC = () => {
  return (dispatch) => {
    fetchQuestionReports()
      .then((reports) => {
        dispatch(fetchQuestionReportsAC(reports));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};



//fetch a reports
export const fetchAnswerReportsAC = (reports) => {
  return {
    type: FETCH_ANSWER_REPORTS,
    reports: reports,
  };
};


export const fetchAnswerReportsTC = () => {
  return (dispatch) => {
    fetchAnswerReports()
      .then((reports) => {
        dispatch(fetchAnswerReportsAC(reports));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//add report

export const addReportTC = (answerId, questionId) => {
  return (dispatch) => {
    addReport(answerId, questionId)
      .then(() => {
        alert("Жалоба была успешно отправлена!")
        //dispatch(fetchAnswerReportsAC(reports));
      })
      .catch((err) => {
        alert(err.response.data.message)
      });
  };
};

///

//fetch a reports
export const deleteReportAC = (reportId) => {
  return {
    type: DELETE_REPORT,
    reportId: reportId,
  };
};


export const deleteReportTC = (id) => {
  return (dispatch) => {
    deleteReport(id)
      .then(() => {
        dispatch(deleteReportAC(id));
      })
      .catch((err) => {
        alert(err.response.data.message)
      });
  };
};

//add ban

export const addBanTC = (userId, ruleId) => {
  return (dispatch) => {
    addBan(userId, ruleId)
      .then(() => {
        alert("Пользователь был заблокирован!")
        //dispatch(fetchAnswerReportsAC(reports));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};


//delete ban



export const deleteBanTC = (userId) => {
  return (dispatch) => {
    deleteBan(userId)
      .then(() => {
        alert("Пользователь был разблокирован!")
        //dispatch(fetchAnswerReportsAC(reports));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

