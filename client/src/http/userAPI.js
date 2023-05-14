import { $host, $authHost} from "./http";
import jwt_token from "jwt-decode";

export const fetchUsers = async (limit, page) => {
  const { data } = await $authHost.get("api/user", {
    params:{
      _limit: limit,
      _page: page,
    }
 }
);
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
  return jwt_token(data.token);
};
