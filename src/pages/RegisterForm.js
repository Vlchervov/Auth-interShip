import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MainRegistrationForm } from "../styled-components/RegisterForm.styled";

const RegisterForm = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const [isPasswordError, setIsPasswordError] = useState();
  const [loaderState, setLoaderState] = useState(false);
  const [disabledState, setDisabledState] = useState({
    disabled: "",
  });
  const [postRegisterError, setPostRegisterError] = useState();

  async function onRegistrationUser(data) {
    if (data.newPassword === data.confirmPassword) {
      try {
        await axios
          .post("http://clinic.studio-mind.ru/register", {
            email: data.newEmail,
            username: data.newUsername,
            firstName: data.firstName,
            lastName: data.lastName,
            password: data.confirmPassword,
          })
          .then(() => {
            setLoaderState(true);
            setTimeout(() => {
              props.setState(!props.state);
              reset();
            }, 2000);
          });
      } catch (err) {
        setPostRegisterError(err.response.data.error);
      }
    } else {
      setIsPasswordError("Пароли не совпадают!");
      setDisabledState({ disabled: true });
    }
  }

  return (
    <>
      <MainRegistrationForm
        onSubmit={handleSubmit(onRegistrationUser)}
        onChange={() => {
          if (setValue.length > 1) {
            setIsPasswordError("");
            setDisabledState({ disabled: "" });
          }
        }}
      >
        <input
          className="newEmail"
          {...register("newEmail", {
            required: "Обязательное поле",
            pattern: { value: /@/, message: "Неверный формат E-mail" },
          })}
          type="text"
          placeholder="E-mail"
        ></input>
        {errors.newEmail?.message && <p>{errors.newEmail?.message}</p>}
        <input
          className="newUserName"
          {...register("newUserName", {
            required: "Обязательное поле",
            minLength: {
              value: 3,
              message: "минимум 3 символа",
            },
          })}
          placeholder="Имя пользователя"
          type="text"
        ></input>
        {errors.newUserName?.message && <p>{errors.newUserName?.message}</p>}
        <input
          className="firstName"
          {...register("firstName", {
            required: "Обязательное поле",
            minLength: {
              value: 3,
              message: "минимум 3 символа",
            },
          })}
          placeholder="Имя"
          type="text"
        ></input>
        {errors.firstName?.message && <p>{errors.firstName?.message}</p>}
        <input
          className="lastName"
          {...register("lastName", {
            required: "Обязательное поле",
            minLength: {
              value: 3,
              message: "минимум 3 символа",
            },
          })}
          placeholder="Фамилия"
          type="text"
        ></input>
        {errors.lastName?.message && <p>{errors.lastName?.message}</p>}
        <input
          className="newPassword"
          {...register("newPassword", {
            required: "Обязательное поле",
            minLength: {
              value: 3,
              message: "минимум 3 символа",
            },
          })}
          placeholder="Пароль"
          type="password"
        ></input>
        {errors.newPassword?.message && <p>{errors.newPassword?.message}</p>}
        <input
          className="confirmPassword"
          {...register("confirmPassword", {
            required: "Обязательное поле",
            minLength: {
              value: 3,
              message: "минимум 3 символа",
            },
          })}
          placeholder="Подтверждение пароля"
          type="password"
        ></input>
        {errors.confirmPassword?.message && (
          <p>{errors.confirmPassword?.message}</p>
        )}

        {postRegisterError && <i>{postRegisterError}</i>}
        {loaderState === false ? (
          <button disabled={disabledState.disabled}>Зарегистрироваться</button>
        ) : (
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        <h5>
          Уже есть аккаунт?{" "}
          <span
            onClick={() => {
              props.setState(!props.state);
            }}
          >
            Войти
          </span>
        </h5>
        <i>{isPasswordError}</i>
      </MainRegistrationForm>
    </>
  );
};

export default RegisterForm;
