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
  font-size: 41px;
  top: 32.8vh;
  left: 44.4vw;
  font-weight: bold;
  color: #333333;

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
  height: 310px;
  background-color: #ffffff;

  i {
    position: absolute;
    color: #fe2e2e;
    font-size: 14px;
    top: 3.5vh;
    padding-top: 50px;
    padding: 40px 39px;
    font-family: "Avenir Next";
    font-weight: normal;
    font-style: normal;
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
    background: #f5f7fa;
    position: absolute;
    top: 2.9vh;
    left: 2.1vw;
    height: 5.1vh;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid #c9d6f0;
    width: 19vw;
    z-index: 10;
    padding: 14px 14px;

    ::placeholder {
      color: #798bad;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      font-family: "Avenir Next";
    }
  }

  input.listItemError {
    border: 1px solid #f06060;
  }

  input[type="password"] {
    background: #f5f7fa;
    position: absolute;
    top: 10vh;
    left: 2.1vw;
    width: 19vw;
    height: 5.3vh;
    border: 1px solid #c9d6f0;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 14px 14px;

    ::placeholder {
      font-size: 14px;
      font-style: normal;
      line-height: 100%;
      font-weight: normal;
      font-family: "Avenir Next";
    }
  }

  label {
    position: absolute;
    top: 16.2vh;
    font-family: "Avenir Next";
    font-style: normal;
    font-size: 14px;
    font-weight: normal;
    left: 3.38vw;
    line-height: 100%;
  }

  input[type="checkbox"] {
    position: absolute;
    top: 16vh;
    left: 1.9vw;
  }

  input[type="submit"] {
    position: absolute;
    top: 19.8vh;
    width: 19vw;
    height: 5vh;
    left: 2.1vw;
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
    position: absolute;
    top: 23.47vh;
    color: #000000;
    left: 2.1vw;
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
