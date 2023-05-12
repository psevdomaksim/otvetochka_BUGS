import { $host, $authHost } from "./http";
import jwt_token from "jwt-decode";

export const registration = async (fullname, email, password) => {
  const { data } = await $host.post("api/user/registration", {
    fullname,
    email,
    password
  });
  localStorage.setItem("token", data.token);  
  return jwt_token(data.token);
};

export const login = async (email, password) => {
  const { data } = await $host.post("api/user/login", {
    email,
    password
  });
  localStorage.setItem("token", data.token);  
  return jwt_token(data.token);
};

export const checkAuth = async () => {
    const { data } = await $authHost.get("api/user/auth");
    localStorage.setItem("token", data.token);
    return jwt_token(data.token);
  };