import { $host, $authHost } from "./http";

export const fetchAnswers = async (questionId, userId) => {
  const { data } = await $authHost.get("api/answer", {
    params: {
      questionId: questionId,
      userId: userId,
    },
  });
  return data;
};

export const fetchAnswersCount = async (questionId, userId) => {
  const { data } = await $host.get("api/answer/count", {
    params: {
      questionId: questionId,
      userId: userId,
    },
  });
  return data;
};


export const fetchOneAnswer = async (id) => {
  const { data } = await $authHost.get("api/answer/" + id);
  return data;
};


export const addNewAnswer = async (body, questionId) => {
  const { data } = await $authHost.post("api/answer", {
    body,
    questionId,
  });
  return data;
};