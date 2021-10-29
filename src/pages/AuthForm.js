import React, { useState } from "react";
import { MainTitle } from "../styled-components/LoginForm.styled";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthForm = () => {
  const [state, setState] = useState(false);

  return (
    <>
      <MainTitle>
        ClinicTrack<span>.</span>
      </MainTitle>
      {!state ? (
        <LoginForm state={state} setState={setState} />
      ) : (
        <RegisterForm state={state} setState={setState} />
      )}
    </>
  );
};

export default AuthForm;
