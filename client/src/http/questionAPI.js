import { $host, $authHost } from "./http";

export const fetchQuestions = async (categoryId, userId) => {
  const { data } = await $host.get("api/question", {
    params: {
      categoryId: categoryId,
      userId: userId,
    },
  });
  return data;
};
