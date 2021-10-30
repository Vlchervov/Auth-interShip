import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthForm = () => {
  const [state, setState] = useState(false);
  const [inputType, setInputType] = useState({
    type: "password",
  });

  return (
    <>
      {!state ? (
        <LoginForm
          state={state}
          setState={setState}
          inputType={inputType}
          setInputType={setInputType}
        />
      ) : (
        <RegisterForm state={state} setState={setState} />
      )}
    </>
  );
};

export default AuthForm;
