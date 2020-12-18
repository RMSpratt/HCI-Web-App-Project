const REGISTERED_USERS = {
  1: {name: "admin", password: "admin", type: "manager"}, 
  2: {name: "Reed", password: "cis*4300", type: "employee"}
}


/* Function: checkUserRegistered
  * Description: This function is used to check if the given employee ID is associated with a registered account.
*/
export function checkUserRegistered(id) {

  if (REGISTERED_USERS[id] === null || REGISTERED_USERS[id] === undefined) {
    return false;
  }

  else {
    return true;
  }
}


/* Function: getUserName
  * Description: This function is used to get the username associated with a given employee ID.
*/ 
export function getUserName(id) {

  let userName;

  if (REGISTERED_USERS[id] === null || REGISTERED_USERS[id] === undefined) {
    userName = "An Other";
  }

  else {
    userName = REGISTERED_USERS[id].name;
  }

  return userName;
}


/* Function: getUserType
  * Description: This function is used to get the user type associated with a given employee ID.
*/ 
export function getUserType(id) {

  let userType;

  if (REGISTERED_USERS[id] === null || REGISTERED_USERS[id] === undefined) {
    userType = "Employee";
  }

  else {
    userType = REGISTERED_USERS[id].type;
  }

  return userType;
}


/* Function: verifyUserPassword
  * Description: This function is used to verify that the password provided for a given user account is correct.
*/ 
export function verifyUserPassword(id, password) {
  return REGISTERED_USERS[id].password === password;
}