import React from 'react';

export default function SignInPanel(props) {

  return (
    <div className="si-su-panel" id="sign-in-panel">
      <div className="si-su-header">
        <h2>Please enter login credentials below</h2>
      </div>
      <div className="si-su-body">
        <div className="sign-in-input">
          <label htmlFor="empID">Employee ID:</label>
          <input id="empID" type="text"></input>
        </div>
        <div className="sign-in-input">
          <label htmlFor="empPass">Password:</label>
          <input id="empPass" type="password"></input>
        </div>
        <button className="secondary-btn" onClick={props.verifySignIn} onKeyDown={props.verifySignIn}>Login</button>
      </div>
    </div>
  )
}