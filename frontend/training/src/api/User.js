const CREATE_API = "http://localhost:4000/";

const User = {
  create: (user) => {
    return fetch(CREATE_API, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  },

  get: () => {},

  getList: () => {},

  delete: () => {},

  update: () => {},
};

export default User;
