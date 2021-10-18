import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  AboutAccount,
  AuthForm,
  MainTitle,
  MainTitleRegister,
  RegistrationForm,
} from "../styled-components/Login.styled";

const Login = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const postLoginApiUrl = "http://clinic.studio-mind.ru/login";
  const getProfileApiUrl = "http://clinic.studio-mind.ru/profile";
  const [requestError, setRequestError] = useState();
  const [isRegisterError, setIsRegisterError] = useState();
  const [postRegisterError, setPostRegisterError] = useState();
  const [state, setState] = useState(false);
  const [users, setUsers] = useState({});
  const [formVisible, setFormVisible] = useState(false);

  const fetchData = async () => {
    try {
      await axios.get(`${getProfileApiUrl}`).then((res) => {
        setUsers({
          email: res.data.email,
          firstName: res.data.firstName,
          id: res.data.id,
          lastName: res.data.lastName,
          username: res.data.username,
        });
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  axios.interceptors.request.use(
    (config) => {
      config.headers.authorization = "Bearer " + localStorage.getItem("token");
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  async function onLogIn(data) {
    try {
      await axios
        .post(`${postLoginApiUrl}`, {
          username: data.email,
          password: data.password,
        })
        .then((res) => {
          setFormVisible(true);
          localStorage.setItem("token", res.data.accessToken);
          fetchData();
        });
    } catch (err) {
      setRequestError(err.message);
    }
  }

  async function onRegistrationUser(data) {
    if (data.newPassword === data.confirmPassword) {
      try {
        await axios
          .post("http://clinic.studio-mind.ru/register", {
            email: data.newEmail,
            username: data.newUserName,
            firstName: data.firstName,
            lastName: data.lastName,
            password: data.confirmPassword,
          })
          .then(() => {
            setValue("newEmail", "");
            setValue("newUserName", "");
            setValue("firstName", "");
            setValue("lastName", "");
            setValue("newPassword", "");
            setValue("confirmPassword", "");
            setState(false);
          });
      } catch (err) {
        setPostRegisterError(err.message);
      }
    } else {
      setIsRegisterError("Пароли не совпадают!");
    }
  }

  let className = "listItem";
  if (errors.email) {
    className += "Error";
  }

  return (
    <>
      <AboutAccount hidden={formVisible === false}>
        <h5>Account page</h5>
        <p>E-mail: {users.email}</p>
        <p>Имя пользователя: {users.username}</p>
        <p>ID: {users.id}</p>
        <p>Имя: {users.firstName}</p>
        <p>Фамилия: {users.lastName}</p>

        <button
          onClick={() => {
            setFormVisible(false);
          }}
        >
          Закрыть
        </button>
      </AboutAccount>
      <MainTitle>
        ClinicTrack<span>.</span>
      </MainTitle>
      {!state ? (
        <AuthForm onSubmit={handleSubmit(onLogIn)}>
          <input
            className={className}
            {...register("email", {
              required: "Обязательное поле",
              pattern: { value: /@/, message: "Неверный формат E-mail" },
            })}
            type="text"
            placeholder="E-mail"
          ></input>
          {errors.email?.message && <i>{errors.email?.message}</i>}
          {requestError && <p>{requestError}</p>}
          <input
            {...register("password", { required: "Обязательное поле" })}
            type="password"
            placeholder="Пароль"
          ></input>
          <input type="checkbox"></input>
          <label>Запомнить меня</label>
          <input type="submit" value="Войти"></input>
          <h5>
            Ещё не зарегестрированы?{" "}
            <span
              onClick={() => {
                setState(true);
              }}
            >
              Получить аккаунт
            </span>
          </h5>
        </AuthForm>
      ) : (
        <>
        <MainTitleRegister>
        ClinicTrack<span>.</span>
      </MainTitleRegister>
        <RegistrationForm
          onSubmit={handleSubmit(onRegistrationUser)}
          onChange={() => {
            if (setValue.length > 1) {
              setIsRegisterError("");
            }
          }}
        >
          <input
            {...register("newEmail", {
              required: "Обязательное поле",
              pattern: { value: /@/, message: "Неверный формат E-mail" },
            })}
            type="email"
            placeholder="E-mail"
          ></input>
          {/* {errors.newEmail?.message && <i>{errors.newEmail?.message}</i>} */}
          <input
            {...register("newUserName", { required: "Обязательное поле" })}
            placeholder="Имя пользователя"
            type="text"
          ></input>
          <input
            {...register("firstName", { required: "Обязательное поле" })}
            placeholder="Имя"
            type="text"
          ></input>
          <input
            {...register("lastName", { required: "Обязательное поле" })}
            placeholder="Фамилия"
            type="text"
          ></input>
          <input
            {...register("newPassword", { required: true })}
            placeholder="Пароль"
            type="password"
          ></input>
          <input
            {...register("confirmPassword", { required: true })}
            placeholder="Подтверждение пароля"
            type="password"
          ></input>
          {isRegisterError && <p>{isRegisterError}</p>}
          {postRegisterError && <i>{postRegisterError}</i>}
          <button>Зарегистрироваться</button>
          <h5>
            Уже есть аккаунт?{" "}
            <span
              onClick={() => {
                setState(false);
              }}
            >
              Войти
            </span>
          </h5>
        </RegistrationForm>
        </>
      )}
    </>
  );
};

export default Login;
