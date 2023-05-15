import { apiConfigMain } from "./constants";

const checkResponse = async (res) => {
  const data = await res.json();
  return res.ok
    ? data
    : Promise.reject(data);
};

export const signUp = async ({ name, email, password }) => {
  const res = await fetch(apiConfigMain.signUp, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: `${name}`,
      password: `${password}`,
      email: `${email}`
    }),
    credentials: 'include',
  });
  return checkResponse(res);
};

export const signIn = async ({ email, password }) => {
  const res = await fetch(apiConfigMain.signIn, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      password: `${password}`,
      email: `${email}`
    }),
    credentials: 'include',
  });
  return checkResponse(res);
};

export const signOut = async () => {
  const res = await fetch(apiConfigMain.signOut, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
  });
  return checkResponse(res);
};

export const editProfile = async ({ name, email }) => {
  const res = await fetch(apiConfigMain.user, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: `${name}`,
      email: `${email}`
    }),
    credentials: 'include',
  });
  return checkResponse(res); 
};