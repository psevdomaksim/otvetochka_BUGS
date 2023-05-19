import { $authHost } from "./http";

export const fetchAllReports = async (answerId, questionId, userId) => {
  const { data } = await $authHost.get("api/report", {
    params: {
      answerId: answerId,
      questionId: questionId,
      userId: userId,
    },
  });
  return data;
};

export const fetchQuestionReports = async () => {
  const { data } = await $authHost.get("api/report/question");
  return data;
};

export const fetchAnswerReports = async () => {
  const { data } = await $authHost.get("api/report/answer");
  return data;
};

export const addReport = async (answerId, questionId) => {
  const { data } = await $authHost.post("api/report", {
    answerId,
    questionId
  });
  return data;
};


export const deleteReport = async (id) => {
  const { data } = await $authHost.delete("api/report/" + id);
  return data;
};
