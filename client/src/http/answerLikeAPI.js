import { $host, $authHost } from "./http";

export const fetchAnswerLikes = async (answerId, userId) => {
  const { data } = await $host.get("api/answer-like", {
    params: {
      answerId: answerId,
      userId: userId,
    },
  });
  return data;
};

export const fetchOneAnswerLike = async (id) => {
  const { data } = await $host.get("api/answer-like/" + id);
  return data;
};


export const likeAnswer = async (answerId) => {
  const { data } = await $authHost.post("api/answer-like", {
    answerId
  });
  return data;
};


export const dislikeAnswer = async (answerId) => {
  const { data } = await $authHost.delete("api/answer-like", {
    params: {
      answerId: answerId,
    },
  });
  return data;
};
