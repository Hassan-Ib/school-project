import React from "react";

const Auth = () => {
  const handleSignIn = async function () {};

  const handleSignInFormError = ({ password, matricNo }) => {
    // check if password is right format
    // check if matric number is write form
  };
  return (
    <>
      <div>sign-in / sign-up</div>
      {/* sign in */}
      <form action="" onSubmit={handleSignIn} className="form">
        <label htmlFor="matricNo">matric No</label>
        <input
          type="number"
          name="matricNo"
          id="matricNo"
          min={150000}
          max={169000}
          placeholder="150000"
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          name="matricNo"
          placeholder="************"
        />
      </form>

      {/* sign up */}
    </>
  );
};

export default Auth;
