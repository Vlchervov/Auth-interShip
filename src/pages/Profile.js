import { useCookies } from "react-cookie";
import useSWR from "swr";
import { fetcher } from "../components/Fetcher";
import { logOut } from "../components/History";
import { AboutAccount } from "../styled-components/Profile.styled.js";

const ProfileApp = () => {
  const { data, error } = useSWR("/profile", fetcher);
  const [cookies] = useCookies(["user"]);
  if (error) {
    return <div>Error...</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }

  const user = (user) => {
    if (user) {
      return (
        <AboutAccount>
          <h5>Account page</h5>
          <p>E-mail: {data.email}</p>
          <p>Имя пользователя: {data.username}</p>
          <p>ID: {data.id}</p>
          <p>Имя: {data.firstName}</p>
          <p>Фамилия: {data.lastName}</p>
          <button onClick={() => logOut()}>Выйти</button>
        </AboutAccount>
      );
    } else {
      logOut();
    }
  };
  return <>{user(cookies.user)}</>;
};

export default ProfileApp;
