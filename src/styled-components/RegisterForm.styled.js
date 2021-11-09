import styled from "styled-components";

export const MainTitleRegister = styled.h1`
  position: absolute;
  font-size: 41px;
  left: 50%;
  top: 5%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  color: #333333;
  span {
    color: #58fa58;
  }
`;

export const MainRegistrationForm = styled.form`
  width: 444px;
  position: absolute;
  top: 59.7%;
  left: 50.4%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border-radius: 10px;

  @media (max-width: 812px) {
    width: 350px;
  }

  p {
    color: #fe2e2e;
    padding: 1px 40px;
    margin-top: 0px;
    font-family: "Avenir Next";
    font-size: 14px;
    font-style: normal;

    @media (max-width: 812px) {
      padding-left: 25px;
    }
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
    width: 82%;
    height: 49px;
    cursor: pointer;

    @media (max-width: 812px) {
      margin-left: 25px;
    }
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

    @media (max-width: 812px) {
      margin-left: 25px;
    }

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

    @media (max-width: 812px) {
      padding-left: 25px;
    }
  }

  .newEmail {
    display: flex;
    margin: 42px 40px 10px;
    padding: 1px 14px;
    height: 46px;
    width: 75.5%;
    border-radius: 4px;
    border: 1px solid #c9d6f0;
    background: #f5f7fa;
    outline: none;

    @media (max-width: 812px) {
      margin-left: 25px;
    }
  }

  .newEmail::placeholder {
    color: #798bad;
    font-family: "Avenir Next";
    font-style: normal;
    font-size: 14px;
  }

  .newUserName {
    display: flex;
    margin: 0px 41px 10px;
    height: 46px;
    width: 75.5%;
    padding: 1px 14px;
    border-radius: 4px;
    background: #f5f7fa;
    border: 1px solid #c9d6f0;
    outline: none;

    @media (max-width: 812px) {
      margin-left: 25px;
    }
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
    margin: 0px 41px 10px;
    height: 46px;
    width: 75.5%;
    border-radius: 4px;
    background: #f5f7fa;
    border: 1px solid #c9d6f0;
    outline: none;

    @media (max-width: 812px) {
      margin-left: 25px;
    }
  }

  .firstName::placeholder {
    color: #798bad;
    font-family: "Avenir Next";
    font-style: normal;
    font-size: 14px;
  }

  .lastName {
    display: flex;
    margin: 0px 41px 10px;
    padding: 1px 14px;
    height: 46px;
    width: 75.5%;
    background: #f5f7fa;
    border-radius: 4px;
    border: 1px solid #c9d6f0;
    outline: none;

    @media (max-width: 812px) {
      margin-left: 25px;
    }
  }

  .lastName::placeholder {
    color: #798bad;
    font-family: "Avenir Next";
    font-style: normal;
    font-size: 13.4px;
  }

  .newPassword {
    display: flex;
    margin: 0px 41px 10px;
    padding: 1px 14px;
    height: 46px;
    width: 75.5%;
    border-radius: 4px;
    background: #f5f7fa;
    border: 1px solid #c9d6f0;
    outline: none;

    @media (max-width: 812px) {
      margin-left: 25px;
    }
  }

  .newPassword::placeholder {
    color: #798bad;
    font-family: "Avenir Next";
    font-style: normal;
    font-size: 13.6px;
  }

  .confirmPassword {
    padding: 1px 14px;
    margin: 0px 41px 10px;
    display: flex;
    height: 46px;
    width: 75.5%;
    border-radius: 4px;
    background: #f5f7fa;
    border: 1px solid #c9d6f0;
    outline: none;

    @media (max-width: 812px) {
      margin-left: 25px;
    }
  }

  .confirmPassword::placeholder {
    color: #798bad;
    font-family: "Avenir Next";
    font-style: normal;
    font-size: 13.7px;
  }

  .lds-ring {
    display: block;
    margin: 20.9px 40.7px;
    margin-bottom: 0px;
    height: 47px;
    width: 82%;
    background-color: #75ebeb;
    border-radius: 4px;
    border: 1px solid #75ebeb;

    @media (max-width: 812px) {
      margin-left: 25px;
    }
  }

  .lds-ring div {
    box-sizing: border-box;
    position: absolute;
    margin-left: 40%;
    margin-top: 3%;
    width: 24px;
    height: 24px;
    border: 5px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
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
