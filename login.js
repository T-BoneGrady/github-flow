'use-strict';

function login(id, name) {
  if (id === "23454") {
    if (name === "Alex") {
      const id = checkout(id);
      console.log("This is user correct");
    } else {
      console.log("This not is user");
    }
  }

  return id;
}

function checkout(token) {
  if (token) {
    const id = "213412345234123";
  }
  return id;
}

export default login;
