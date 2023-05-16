import { addNewRule, fetchRules } from "../../http/ruleAPI";
import { ADD_RULE, API_ERROR, FETCH_RULES } from "../../utils/AC_consts";

// error
export const ApiError = (data) => {
  return {
    type: API_ERROR,
    data: data,
  };
};

// fetch rules
export const fetchRulesAC = (data) => {
  return {
    type: FETCH_RULES,
    data: data,
  };
};

export const fetchRulesTC = () => {
  return (dispatch) => {
    fetchRules()
      .then((rules) => {
        dispatch(fetchRulesAC(rules));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// add new rule

export const addNewRuleAC = (data) => {
  return {
    type: ADD_RULE,
    rule: data.rule,
    message: data.message,
  };
};
export const addNewRuleTC = (title, body) => {
  return (dispatch) => {
    addNewRule(title, body)
      .then((data) => {
        dispatch(addNewRuleAC(data));
      })
      .catch((err) => {
        dispatch(ApiError(err.response.data.message));
      });
  };
};
