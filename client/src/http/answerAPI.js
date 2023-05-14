import { $host, $authHost } from "./http";

export const fetchAnswers = async (questionId, userId) => {
  const { data } = await $host.get("api/answer", {
    params: {
      questionId: questionId,
      userId: userId,
    },
  });
  return data;
};


export const fetchOneAnswer = async (id) => {
  const { data } = await $host.get("api/answer/" + id);
  return data;
};