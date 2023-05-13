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
