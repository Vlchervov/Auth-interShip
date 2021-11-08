import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { axiosInstance } from "../components/Api";
import { RegsiterInput } from "../components/RegisterInput";
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
        await axiosInstance
          .post("/register", {
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
      {/* <MainTitleRegister>
        ClinicTrack<span>.</span>
      </MainTitleRegister> */}
      <MainRegistrationForm
        onSubmit={handleSubmit(onRegistrationUser)}
        onChange={() => {
          if (setValue.length > 1) {
            setIsPasswordError("");
            setDisabledState({ disabled: "" });
          }
        }}
      >
        <RegsiterInput register={register} errors={errors} />
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
        <p>{postRegisterError}</p>
      </MainRegistrationForm>
    </>
  );
};

export default RegisterForm;
