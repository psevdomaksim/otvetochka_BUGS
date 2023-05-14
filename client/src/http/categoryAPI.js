import { $host } from "./http";


export const fetchCategories= async () => {
  const { data } = await $host.get("api/category");
  return data;
};

export const fetchOneCategory = async (id) => {
  const { data } = await $host.get("api/category/" + id);
  return data;
};