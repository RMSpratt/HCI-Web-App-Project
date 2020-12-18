const REGISTERED_USERS = {
  1: {name: "admin", password: "admin", type: "manager"}, 
  2: {name: "Reed", password: "cis*4300", type: "employee"}
}

export function checkUserRegistered(id) {

  if (REGISTERED_USERS[id] === null || REGISTERED_USERS[id] === undefined) {
    return false;
  }

  else {
    return true;
  }
}

export function getUserName(id) {

  let userName;

  if (REGISTERED_USERS[id] === null || REGISTERED_USERS[id] === undefined) {
    userName = "AN Other"
  }

  else {
    userName = REGISTERED_USERS[id].name
  }
  return userName;
}

export function getUserType(id) {
  return REGISTERED_USERS[id].type
}

export function verifyUserPassword(id, password) {
  return REGISTERED_USERS[id].password === password;
}