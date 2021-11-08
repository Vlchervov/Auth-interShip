import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { logIn } from "../components/History";
import { AuthInput } from "../components/AuthInput";
import { MainFormLogin } from "../styled-components/LoginForm.styled";
import { axiosInstance } from "../components/Api";

const LoginForm = (props) => {
  const [loaderState, setLoaderState] = useState(false);
  const [, setCookies] = useCookies(["user"]);

  const [requestError, setRequestError] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onLogin(data) {
    try {
      await axiosInstance
        .post("/login", {
          username: data.email,
          password: data.password,
        })
        .then((res) => {
          setLoaderState(true);
          setCookies("user", data.email, { path: "/" });
          localStorage.setItem("token", res.data.accessToken);
          setTimeout(() => {
            logIn();
          }, 2000);
        });
    } catch (err) {
      setRequestError(err.message);
    }
  }

  return (
    <>
      {/* <MainTitle>
        ClinicTrack<span>.</span>
      </MainTitle> */}
      <MainFormLogin onSubmit={handleSubmit(onLogin)}>
        <AuthInput register={register} errors={errors} />
        <input type="checkbox" id="rememberMe"></input>
        <label htmlFor="rememberMe">Запомнить меня</label>
        {loaderState === false ? (
          <input type="submit" value="Войти"></input>
        ) : (
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        <h5>
          Ещё не зарегистрированы?{" "}
          <span
            onClick={() => {
              props.setState(!props.state);
            }}
          >
            Получить аккаунт
          </span>
        </h5>
        <p>{requestError}</p>
      </MainFormLogin>
    </>
  );
};

export default LoginForm;
