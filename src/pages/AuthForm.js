import React, { useState } from "react";
import { MainTitleRegister } from "../styled-components/Login.styled";
import LoginForm from "./LoginForm";
import ProfileApp from "./Profile";
import RegisterForm from "./RegisterForm";

const AuthForm = () => {
  const [state, setState] = useState(false);

  return (
    <>
      <MainTitleRegister>
        ClinicTrack<span>.</span>
      </MainTitleRegister>
      <ProfileApp/>
      {!state ? (
        <LoginForm state={state} setState={setState}/>
      ) : (
        <RegisterForm state={state} setState={setState} />
      )}
    </>
  );
};

export default AuthForm;
