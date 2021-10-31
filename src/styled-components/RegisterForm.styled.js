import styled from "styled-components";

export const MainTitleRegister = styled.h1`
  position: absolute;
  font-size: 41px;
  top: 21.6vh;
  left: 44.8%;
  font-weight: bold;
  color: #333333;
  span {
    color: #58fa58;
  }
  @media screen and (min-height: 1600px) and (max-width: 1460px) {
    left: 43%;
    top: 25vh;
  }
`;

export const MainRegistrationForm = styled.form`
  position: absolute;
  top: 31.5vh;
  left: 38.4vw;
  background: #ffffff;
  border-radius: 10px;

  p {
    color: #fe2e2e;
    padding: 1px 40px;
    margin-top: 0px;
    font-family: "Avenir Next";
    font-size: 14px;
    font-style: normal;
    padding-right: 0px;
  }

  button {
    margin: 9.9px 40.7px;
    margin-bottom: 0px;
    background-color: #75ebeb;
    color: #333333;
    font-weight: 500;
    font-family: "Avenir Next";
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #75ebeb;
    width: 19.0625vw;
    height: 49px;
    cursor: pointer;
  }

  button:disabled {
    background-color: #d8d8d8;
    border: 1px solid #d8d8d8;
    cursor: auto;
    color: #fafafa;
  }

  button:enabled {
    background-color: #75ebeb;
    border: 1px solid #75ebeb;
    cursor: pointer;
  }

  h5 {
    margin: 9px 40.7px;
    margin-bottom: 0px;
    padding: 1px 0.5px;
    color: #000000;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.2px;
    font-family: "Avenir Next";

    span {
      cursor: pointer;
      color: #01dfa5;
    }
  }

  i {
    color: #fe2e2e;
    padding: 1px 40px;
    font-size: 14px;
    font-style: normal;
  }

  .newEmail {
    display: flex;
    margin: 42px 40px 10px;
    padding: 1px 14px;
    height: 46px;
    width: 17.447916666666668vw;
    border-radius: 4px;
    border: 1px solid #c9d6f0;
    background: #f5f7fa;
    outline: none;
  }

  .newEmail::placeholder {
    color: #798bad;
    font-family: "Avenir Next";
    font-style: normal;
    font-size: 14px;
  }

  .newUserName {
    display: flex;
    margin: 0px 42px 10px;
    height: 46px;
    width: 17.447916666666668vw;
    padding: 1px 14px;
    border-radius: 4px;
    background: #f5f7fa;
    border: 1px solid #c9d6f0;
    outline: none;
  }

  .newUserName::placeholder {
    color: #798bad;
    font-family: "Avenir Next";
    font-style: normal;
    font-size: 13.5px;
  }

  .firstName {
    display: flex;
    padding: 1px 14px;
    margin: 0px 42px 10px;
    height: 46px;
    width: 17.447916666666668vw;
    border-radius: 4px;
    background: #f5f7fa;
    border: 1px solid #c9d6f0;
    outline: none;
  }

  .firstName::placeholder {
    color: #798bad;
    font-family: "Avenir Next";
    font-style: normal;
    font-size: 14px;
  }

  .lastName {
    display: flex;
    margin: 0px 42px 10px;
    padding: 1px 14px;
    height: 46px;
    width: 17.447916666666668vw;
    background: #f5f7fa;
    border-radius: 4px;
    border: 1px solid #c9d6f0;
    outline: none;
  }

  .lastName::placeholder {
    color: #798bad;
    font-family: "Avenir Next";
    font-style: normal;
    font-size: 13.4px;
  }

  .newPassword {
    display: flex;
    margin: 0px 42px 10px;
    padding: 1px 14px;
    height: 46px;
    width: 17.447916666666668vw;
    border-radius: 4px;
    background: #f5f7fa;
    border: 1px solid #c9d6f0;
    outline: none;
  }

  .newPassword::placeholder {
    color: #798bad;
    font-family: "Avenir Next";
    font-style: normal;
    font-size: 13.6px;
  }

  .confirmPassword {
    padding: 1px 14px;
    margin: 0px 42px 10px;
    display: flex;
    height: 46px;
    width: 17.447916666666668vw;
    border-radius: 4px;
    background: #f5f7fa;
    border: 1px solid #c9d6f0;
    outline: none;
  }

  .confirmPassword::placeholder {
    color: #798bad;
    font-family: "Avenir Next";
    font-style: normal;
    font-size: 13.7px;
  }

  .lds-ring {
    display: block;
    padding: 10px;
    margin: 9.9px 40.7px;
    height: 2.8vh;
    width: 17.9vw;
    background-color: #75ebeb;
    border-radius: 4px;
    border: 1px solid #75ebeb;
  }

  @media screen and (min-height: 1600px) and (max-width: 1460px) {
    .lds-ring {
      height: 1.7vh;
      width: 17.5vw;
      margin-top: 1.5vh;
      margin-bottom: 0px;
    }
  }

  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    margin-top: 0.5vh;
    left: 10.8vw;
    width: 24px;
    height: 24px;
    border: 5px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }

  @media screen and (min-height: 1600px) and (max-width: 1460px) {
    .lds-ring div {
      margin-top: 0.2vh;
    }
  }

  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
