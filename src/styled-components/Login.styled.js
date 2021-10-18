import styled from "styled-components";

export const AboutAccount = styled.div`
  position: relative;
  width: 26vw;
  height: 54vh;
  left: 2vw;
  top: 21vh;
  border-radius: 10px;
  background: white;

  h5 {
    padding: 2rem;
    font-weight: 500;
    font-family: "Avenir Next";
    font-size: 14px;
    text-align: end;
    color: #585858;

    :after {
      content: "";
      display: block;
      height: 1px;
      background-color: #d8d8d8;
    }
  }

  p {
    font-family: "Avenir Next";
    position: relative;
    left: 3rem;

    :after {
      content: "";
      display: block;
      height: 1px;
      background-color: #d8d8d8;
      width: 80%;
    }
  }

  button {
    width: 4vw;
    height: 3vh;
    position: absolute;
    background-color: #d8d8d8;
    display: block;
    top: 35vh;
    left: 10vw;
    text-align: center;
    border: none;
    cursor: pointer;
    transition: 0.25s;
    color: #000000;

    :hover {
      background: #fa5858;
    }
  }
`;

export const MainTitle = styled.h1`
  position: absolute;
  font-size: 40px;
  top: 33.2vh;
  left: 44.2vw;
  font-weight: bold;
  color: #333333;
  font-family: "Avenir Next";
  letter-spacing: 1.06px;
  span {
    color: #58fa58;
  }
`;

export const AuthForm = styled.form`
  position: absolute;
  border-radius: 10px;
  top: 43vh;
  left: 38.4vw;
  width: 23.3vw;
  transform: translate(50%, 0, 50%);
  background-color: #ffffff;

  i {
    color: #fe2e2e;
    font-size: 14px;
    font-family: "Avenir Next";
  }

  p {
    color: #fe2e2e;
    position: absolute;
    top: 27.8vh;
    padding: 1px 40px;
    font-family: "Avenir Next";
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
  }

  input[type="text"] {
    border: 1px solid #c9d6f0;
  }

  input.listItemError {
    border: 1px solid #f06060;
  }

  input[type="text"] {
    display: block;
    border-radius: 4px;
    margin: 20px auto 10px;
    margin-top: 38px;
    padding: 16px 12px;
    width: 341px;
    outline: none;

    ::placeholder {
      font-size: 14px;
      font-style: normal;
      line-height: 100%;
      font-weight: normal;
      font-family: "Avenir Next";
    }
  }

  input[type="password"] {
    display: block;
    border-radius: 4px;
    margin-left: 40px;
    padding: 16px 16px;
    width: 333px;
    margin-top: 12px;
  }

  input[type="password"] {
    border: 1px solid #c9d6f0;
  }

  /* label {
    display: block;
    margin: 0px 63px 50px;
    font-style: normal;
    font-size: 14px;
    font-weight: normal;

  } */

  input[type="checkbox"] {
    margin: 11px 42px 0px;
    margin-right: 12px;
  }

  label {
    position: relative;
    bottom: 3px;
    font-size: 14px;
  }

  input[type="submit"] {
    margin: 15px auto 10px;
    padding: 14px;
    display: block;
    width: 19vw;
    color: #333333;
    font-weight: 500;
    font-size: 16px;
    font-family: "Avenir Next";
    background-color: #75ebeb;
    border-radius: 4px;
    border: 1px solid #75ebeb;
    cursor: pointer;
  }

  h5 {
    margin: 10px 40px 40px;
    display: block;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    font-family: "Avenir Next";

    span {
      cursor: pointer;
      color: #01dfa5;
    }
  }
`;

export const MainTitleRegister = styled.h1`
  position: absolute;
  font-size: 41px;
  top: 21.6vh;
  left: 44.37vw;
  font-weight: bold;
  color: #333333;

  span {
    color: #58fa58;
  }
`;

export const RegistrationForm = styled.form`
  position: absolute;
  top: 31.5vh;
  left: 38.4vw;
  z-index: 11;
  height: 527px;
  width: 445px;
  background: #ffffff;
  border-radius: 10px;

  p {
    color: #fe2e2e;
    position: absolute;
    top: 40.9vh;
    padding: 1px 43px;
    font-family: "Avenir Next";
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
  }

  i {
    color: #fe2e2e;
    font-family: "Avenir Next";
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    position: absolute;
    top: 51vh;
    padding: 0px 40px;
  }

  input {
    position: relative;
    top: 4.2vh;
    left: 1.4vw;
    margin: 0px 15px 10px;
    display: flex;
    height: 46px;
    width: 333px;
    border-radius: 4px;
    padding: 1px 14px;
    background: #f5f7fa;
    border: 1px solid #c9d6f0;

    ::placeholder {
      color: #798bad;
      font-family: "Avenir Next";
      font-style: normal;
      font-size: 14px;
    }
  }

  button {
    position: absolute;
    top: 42.5vh;
    left: 2.1vw;
    background-color: #75ebeb;
    color: #333333;
    font-weight: 500;
    font-family: "Avenir Next";
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #75ebeb;
    width: 366px;
    height: 49px;
    cursor: pointer;
  }

  h5 {
    position: absolute;
    top: 46.2vh;
    left: 2.2vw;
    color: #000000;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    font-family: "Avenir Next";

    span {
      cursor: pointer;
      color: #01dfa5;
    }
  }
`;
