import { $host, $authHost } from "./http";

export const fetchRules = async () => {
  const { data } = await $host.get("api/rule");
  return data;
};


export const fetchOneRule = async (id) => {
  const { data } = await $host.get("api/rule/" + id);
  return data;
};


export const addNewRule = async (title, body) => {
  const { data } = await $authHost.post("api/rule", {
    title,
    body,
  });
  return data;
};