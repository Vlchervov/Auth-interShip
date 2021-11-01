export const RegsiterInput = ({ register, errors }) => {
  return (
    <div>
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
    </div>
  );
};
