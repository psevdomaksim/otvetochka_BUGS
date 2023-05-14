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

export const fetchOneQuestion = async (id) => {
  const { data } = await $host.get("api/question/" + id);
  return data;
};

export const addNewQuestion = async (title, body, categoryId) => {
  const { data } = await $authHost.post("api/question", {
    title,
    body,
    categoryId,
  });
  return data;
};
