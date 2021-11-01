import { useCookies } from "react-cookie";
import useSWR from "swr";
import { fetcher } from "../components/Fetcher";
import { logOut } from "../components/History";
import { AboutAccount } from "../styled-components/Profile.styled.js";

const ProfileApp = () => {
  const { data, error } = useSWR("/profile", fetcher);
  const [cookies] = useCookies(["user"]);

  if (error) {
    return (
      <div>
        Что-то пошло не так...
        <button onClick={() => logOut()}>Вернуться на главную</button>
      </div>
    );
  }

  if (!data) {
    const user = () => {
      if (!localStorage.token) {
        logOut();
      }
    };
    return <div>{user(cookies.user)}</div>;
  }

  return (
    <AboutAccount>
      <h5>Account page</h5>
      <p>E-mail: {data.email}</p>
      <p>Имя пользователя: {data.username}</p>
      <p>ID: {data.id}</p>
      <p>Имя: {data.firstName}</p>
      <p>Фамилия: {data.lastName}</p>
      <button
        onClick={() => {
          logOut();
          localStorage.removeItem("token");
        }}
      >
        Выйти
      </button>
    </AboutAccount>
  );
};

export default ProfileApp;
