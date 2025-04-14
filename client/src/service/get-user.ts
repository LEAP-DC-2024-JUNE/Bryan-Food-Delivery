export const getUser = async (token: string) => {
  const response = await fetch("http://127.0.0.1:8000/auth/user", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const data = await response.json();
  return data;
};
