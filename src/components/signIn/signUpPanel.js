import React from 'react';

export default function SignUpPanel(props) {

  return (
    <div className="si-su-panel" id="sign-up-panel">
      <div className="si-su-header">
        <h2>Welcome {props.name}!</h2>
      </div>
      <div className="si-su-body">
        <div id="sign-up-welcome">
        <p>Thank you for signing in with our utility website.</p>
        <p>Please select a new password for your account below.</p>
      </div>
      <div className="sign-in-input">
        <label htmlFor="passNew">Password:</label>
        <input id="passNew" type="text"></input>
      </div>
      <div className="sign-in-input">
        <label htmlFor="passConfirm">Confirm Password:</label>
        <input id="passConfirm" type="password"></input>
      </div>
      <p className="sign-up-tip">*Password must be 8+ characters in length.</p>
      <p className="sign-up-tip">*Password must contain one of: uppercase letter, lowercase letter, and number.</p>
      <button className="secondary-btn" onClick={props.verifySignUp} onKeyDown={props.verifySignUp}>Save Password</button>
    </div>
  </div>
  )
}