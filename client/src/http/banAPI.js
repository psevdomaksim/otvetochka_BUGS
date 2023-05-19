import { $authHost } from "./http";


export const addBan = async (userId) => {
  const { data } = await $authHost.post("api/ban", {
    userId,
  });
  return data;
};


export const deleteBan = async (userId) => {
  const { data } = await $authHost.delete("api/ban", {
    params: {
      userId: userId,
    },
  });
  return data;
};