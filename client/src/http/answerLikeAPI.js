import { $host, $authHost } from "./http";

export const fetchAnswerLikes = async (answerId, userId) => {
  const { data } = await $host.get("api/answer/like", {
    params: {
      answerId: answerId,
      userId: userId,
    },
  });
  return data;
};


export const addLike = async (title, body, categoryId) => {
  const { data } = await $authHost.post("api/answer/like", {
    title,
    body,
    categoryId,
  });
  return data;
};


export const deleteLike = async (id) => {
  const { data } = await $host.delete("api/answer/like/" + id);
  return data;
};
