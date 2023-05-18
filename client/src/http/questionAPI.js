import { $host, $authHost } from "./http";

export const fetchQuestions = async (categoryId, userId, limit, page) => {
  const { data } = await $host.get("api/question", {
    params: {
      categoryId: categoryId,
      userId: userId,
      limit: limit,
      page: page,
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
