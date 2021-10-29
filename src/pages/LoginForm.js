import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { logIn } from "../components/History";
import {
  MainFormLogin,
  PasswordCheckEye,
} from "../styled-components/LoginForm.styled";

const LoginForm = (props) => {
  const [opacityState, setOpacityState] = useState(false);
  const [inputType, setInputType] = useState({
    type: "password",
  });
  const [requestError, setRequestError] = useState();
  const {
    register,
    handleSubmit,
    reset,
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
          localStorage.setItem("token", res.data.accessToken);
          logIn();
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
            type={inputType.type}
            placeholder="Пароль"
          ></input>
          {errors.password?.message && <i>{errors.password?.message}</i>}
          <div
            onClick={() => {
              if (inputType.type === "password") {
                setInputType({ type: "text" });
                setOpacityState(true);
              } else {
                setInputType({ type: "password" });
                setOpacityState(false);
              }
            }}
          ></div>
        </PasswordCheckEye>
        <input type="checkbox" id="rememberMe"></input>
        <label htmlFor="rememberMe">Запомнить меня</label>
        <input type="submit" value="Войти"></input>
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
