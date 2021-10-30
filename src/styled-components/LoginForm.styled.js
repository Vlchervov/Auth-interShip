import styled from "styled-components";

export const MainTitle = styled.h1`
  position: absolute;
  font-size: 41px;
  top: 32.7vh;
  left: 44.8%;
  font-weight: bold;
  color: #333333;
  span {
    color: #58fa58;
  }
  @media screen and (min-height: 1600px) and (max-width: 1460px) {
    left: 42.8%;
    top: 36vh;
  }
`;

export const MainFormLogin = styled.form`
  position: absolute;
  border-radius: 10px;
  width: 23.4%;
  top: 42.7vh;
  left: 38.4vw;
  transform: translate(50%, 0, 50%);
  background-color: #ffffff;

  i {
    margin: 0px 41px;
    color: #fe2e2e;
    font-size: 14px;
    font-style: normal;
    font-weight: normal;
  }

  p {
    color: #fe2e2e;
    padding: 1px 40px;
    margin-top: 0px;
    font-family: "Avenir Next";
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
  }

  input[type="email"] {
    border: 1px solid #c9d6f0;
  }

  input.listItemError {
    border: 1px solid #f06060;
  }

  input[type="email"] {
    display: block;
    border-radius: 4px;
    margin: 10px 40px;
    margin-top: 41px;
    margin-bottom: 0px;
    padding: 16px 17px 16px;
    width: 17.1875vw;
    background: #f5f7fa;
    outline: none;

    ::placeholder {
      font-size: 14px;
      font-style: normal;
      line-height: 100%;
      font-weight: normal;
      font-family: "Avenir Next";
    }

    @media screen and (min-height: 1600px) and (max-width: 1460px) {
      margin-left: 30px;
    }
  }

  input[type="password"] {
    display: block;
    border-radius: 4px;
    margin-left: 40px;
    padding: 16px 17px;
    width: 17.1875vw;
    margin-top: 11px;
    background: #f5f7fa;

    @media screen and (min-height: 1600px) and (max-width: 1460px) {
      margin-left: 30px;
    }
  }

  input[type="password"] {
    border: 1px solid #c9d6f0;
  }

  input[type="checkbox"] {
    margin: 12px 41px 0px;
    margin-right: 12.5px;
    cursor: pointer;
  }

  label {
    position: relative;
    bottom: 3px;
    font-size: 14px;
    cursor: pointer;
  }

  input[type="submit"] {
    margin: 16px auto 10px;
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

    @media screen and (min-height: 1600px) and (max-width: 1460px) {
      margin-left: 30px;
      width: 19.6vw;
    }
  }

  h5 {
    margin: 10px 40px 22px;
    display: block;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    font-family: "Avenir Next";

    span {
      cursor: pointer;
      color: #088a68;
      font-family: "Avenir Next";
    }

    @media screen and (min-height: 1600px) and (max-width: 1460px) {
      margin-left: 30px;
    }
  }

  .lds-ellipsis {
    display: block;
    position: relative;
    width: 18.84vw;
    height: 5vh;
    margin: 16px auto 10px;
    border-radius: 4px;
    border: 1px solid #75ebeb;
    background-color: #75ebeb;
  }

  @media screen and (min-height: 1600px) and (max-width: 1460px) {
    .lds-ellipsis {
      margin: 16px 31px 10px;
      height: 3vh;
      width: 19.4vw;
    }
  }

  .lds-ellipsis div {
    display: block;
    position: absolute;
    margin-top: 1.8vh;
    margin-left: 7.5vw;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  @media screen and (min-height: 1600px) and (max-width: 1460px) {
    .lds-ellipsis div {
      margin-top: 1.2vh;
    }
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;
export const PasswordCheckEye = styled.div`
  position: relative;

  input[type="text"] {
    display: block;
    border-radius: 4px;
    margin-left: 40px;
    padding: 16px 17px;
    width: 17.1875vw;
    margin-top: 11px;
    background: #f5f7fa;
    border: 1px solid #c9d6f0;

    @media screen and (min-height: 1600px) and (max-width: 1460px) {
      margin-left: 30px;
    }
  }

  div {
    position: absolute;
    top: 13px;
    right: 2.8645833333333335vw;
    width: 24px;
    height: 23px;
    background: url("./img/view.svg") no-repeat;
    cursor: pointer;
    opacity: ${({ change }) => (change ? "0.5" : "1")};
    :hover {
      opacity: 0.8;
    }
  }
`;
