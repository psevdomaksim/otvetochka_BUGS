import { $host, $authHost } from "./http";
import jwt_token from "jwt-decode";

export const fetchUsers = async () => {
  const { data } = await $host.get("api/user");
  return data;
};


export const fetchActiveUsers = async () => {
  const { data } = await $host.get("api/user/active");
  return data;
};


export const fetchOneUser = async (id) => {
  const { data } = await $host.get("api/user/" + id);
  return data;
};

export const editUserProfile = async (id, body) => {
  const { data } = await $authHost({
    method: "PUT",
    url: `api/user/${id}`,
    data: body,
  });
  localStorage.setItem("token", data.token);
  return {
    user: jwt_token(data.token),
    message: data.message,
  };
};
