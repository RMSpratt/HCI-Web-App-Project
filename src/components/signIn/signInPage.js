import React from "react"
import {checkUserRegistered, getUserName, getUserType, verifyUserPassword} from '../../data/defaultUsers';
import SignInPanel from "./signInPanel";
import SignUpPanel from "./signUpPanel";

class SignInPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      errorMsg: null,
      panel: "signIn"
    }

    this.verifySignIn = this.verifySignIn.bind(this);
    this.verifySignUp = this.verifySignUp.bind(this);
  }

  /* Function: verifySignIn
   * Description: This function will verify the Employee ID and password values given for signing in to the website.
   *              If the Employee ID provided is using a temporary password, the user will be prompted to create a new password.
   *
   * Parameters: None
   * Return: void
  */
  verifySignIn() {
    let idInput = document.getElementById('empID');
    let passInput = document.getElementById('empPass');

    //If the ID and/or password input fields have been deleted, inform the user
    if (idInput === null || passInput === null) {
      this.setState({errorMsg: "Employee ID and Password fields cannot be blank."});
    }

    else {

      //Check if an employee ID and password were provided
      if (idInput.value === "" || passInput.value === "") {
        this.setState({errorMsg: "Employee ID and Password fields cannot be empty."});
      }

      else {
        let id = idInput.value;

        //Check if the employee ID provided is a positive integer value
        if (/^\d+$/.test(id) === false) {
          this.setState({errorMsg: "The employee ID provided was invalid."});
        }

        //Check if the employee ID is in a valid range
        else if (parseInt(id) < 1 || parseInt(id) > 99999) {
          this.setState({errorMsg: "The employee ID provided could not be found in our system."});
        }

        else {
        
          //Check if the employee has registered their account
          let userRegistered = checkUserRegistered(idInput.value);
  
          //If the user has already registered their account, check their password
          if (userRegistered) {
            
            let passwordMatch = verifyUserPassword(idInput.value, passInput.value)
            
            //If the password matches the ID, login the user
            if (passwordMatch) {

              let userName = getUserName(id);
              let userType = getUserType(id);
      
              this.props.signIn(userName, userType);
            }

            //Else, the employee ID and password combo are invalid
            else {
              this.setState({errorMsg: "The employee ID or password provided was invalid."});
            }
          }
  
          //Else, have them sign up for an account
          else {
            this.setState({panel: "signUp"});
          }   
        }
      }
    }
  }


  /* Function: verifySignUp
   * Description: This function will verify the password values given to determine if it meets the strength criteria specified, 
   *              and if both passwords match. On success, the user will be signed-in to the website.
   *
   * Parameters: empID      //The ID of the employee signing up with the system
   * Return: void
  */
  verifySignUp(empID) {
    let passInput = document.getElementById('passNew');
    let confirmInput = document.getElementById('passConfirm');

    //If the ID and/or password input fields have been deleted, inform the user
    if (passInput === null || passInput.value === "" || confirmInput === null || confirmInput.value === "") {
      this.setState({errorMsg: "Employee ID and Password fields cannot be blank."});
    }

    else {
      let passValue = passInput.value;
      let confirmValue = confirmInput.value;

      //The set of password criteria to check for
      let length = passValue.length;
      let hasLower = false; ///[a-z]/.test(passValue);
      let hasUpper = false; ///[A-Z]/.test(passValue);
      let hasNumber = false; ///[0-9]/.test(passValue);
      let hasWhitespace = false; ///[\s]/.test(passValue);

      //Iterate through the password to make sure it meets the strength criteria
      for (let i = 0; i < length; i++) {

        if (passValue[i] >= 'a' && passValue[i] <= 'z' && !hasLower) {
          hasLower = true;
        }

        if (passValue[i] >= 'A' && passValue[i] <= 'Z' && !hasUpper) {
          hasUpper = true;
        }

        if (passValue[i] >= '0' && passValue[i] <= '9' && !hasNumber) {
          hasNumber = true;
        }

        if (passValue[i] === ' ' && !hasWhitespace) {
          hasWhitespace = true;
        }
      }

      //Verify the password on each criteria
      if (length < 8 || !hasLower || !hasUpper || !hasNumber || hasWhitespace) {
        this.setState({errorMsg: "The password provided does not meet the required strength criteria."});
      }

      //Else if the initial password and the confirm password don't match, inform the user
      else if (passValue !== confirmValue) {
        this.setState({errorMsg: "The provided passwords do not match. Please re-enter the new password."});
      }

      //Else, get the user's name and access level and sign them in
      else {
        let userName = getUserName(empID);
        let userType = getUserType(empID);

        this.props.signIn(userName, userType);
      }
    }
  }

  render() {

    let displayPanel;
    let errorView = null;

    //Display the signup panel if the user is signing up with the website by setting a non-temporary password
    if (this.state.panel === "signUp") {
      displayPanel = <SignUpPanel verifySignUp={this.verifySignUp}/>;
    }

    //Else, display the sign-in panel
    else {
      displayPanel = <SignInPanel verifySignIn={this.verifySignIn}/>;
    }

    if (this.state.errorMsg != null) {
      errorView = <div className="warning-message">
        <p>{this.state.errorMsg}</p>
      </div>
    }

    return (
      <main>
        {errorView}
        {displayPanel}
      </main>
    )
  }
}

export default SignInPage