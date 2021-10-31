import React, { useState } from "react";
import { PasswordCheckEye } from "../styled-components/LoginForm.styled";

export const Input = ({ register, errors }) => {
  const [type, setType] = useState("password");

  const toggleType = () => setType(type === "password" ? "text" : "password");

  return (
    <div>
      <input
        {...register("email", {
          required: "Обязательное поле",
          pattern: { value: /@/, message: "Неверный формат E-mail" },
        })}
        type="email"
        placeholder="E-mail"
      ></input>
      {errors.email?.message && <i>{errors.email?.message}</i>}
      <PasswordCheckEye>
        <input
          placeholder="Пароль"
          type={type}
          {...register("password", { required: "Обязательное поле" })}
        />
        {errors.password?.message && <i>{errors.password?.message}</i>}
        <div onClick={toggleType}></div>
      </PasswordCheckEye>
    </div>
  );
};
