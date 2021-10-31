import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthForm = () => {
  const [state, setState] = useState(false);

  return (
    <>
      {!state ? (
        <LoginForm state={state} setState={setState} />
      ) : (
        <RegisterForm state={state} setState={setState} />
      )}
    </>
  );
};

export default AuthForm;
