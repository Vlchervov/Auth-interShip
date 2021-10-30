import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { logIn } from "../components/History";
import {
  MainFormLogin,
  MainTitle,
  PasswordCheckEye,
} from "../styled-components/LoginForm.styled";

const LoginForm = (props) => {
  const [opacityState, setOpacityState] = useState(false);
  const [loaderState, setLoaderState] = useState(false);
  const [, setCookies] = useCookies(["user"]);
  const [requestError, setRequestError] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const instance = axios.create({
    baseURL: "http://clinic.studio-mind.ru",
  });

  async function onLogin(data) {
    try {
      await instance
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

  let className = "listItem";

  if (errors.email) {
    className += "Error";
  }

  return (
    <>
      <MainTitle>
        ClinicTrack<span>.</span>
      </MainTitle>
      <MainFormLogin onSubmit={handleSubmit(onLogin)}>
        <input
          className={className}
          {...register("email", {
            required: "Обязательное поле",
            pattern: { value: /@/, message: "Неверный формат E-mail" },
          })}
          type="email"
          placeholder="E-mail"
        ></input>
        {errors.email?.message && <i>{errors.email?.message}</i>}
        <PasswordCheckEye change={opacityState}>
          <input
            {...register("password", { required: "Обязательное поле" })}
            type={props.inputType.type}
            placeholder="Пароль"
          ></input>
          {errors.password?.message && <i>{errors.password?.message}</i>}
          <div
            onClick={() => {
              if (props.inputType.type === "password") {
                props.setInputType({ type: "text" });
                setOpacityState(true);
              } else {
                props.setInputType({ type: "password" });
                setOpacityState(false);
              }
            }}
          ></div>
        </PasswordCheckEye>
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
