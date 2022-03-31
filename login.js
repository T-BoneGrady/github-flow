'use-strict';
import uuid from 'uuid4';

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
    const id = uuid();
  }
  return id;
}

function longup(idUser) {
  let id = idUser;
  if (id) {
    console.log(`No is id ${id}`);
  }
  return id;
}

export default { login, checkout, longup };
