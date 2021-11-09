import styled from "styled-components";

export const MainTitle = styled.h1`
  position: absolute;
  display: block;
  font-size: 41px;
  top: 33.4%;
  left: 46%;
  font-weight: bold;
  color: #333333;
  span {
    color: #58fa58;
  }
`;

export const MainFormLogin = styled.form`
  position: absolute;
  border-radius: 10px;
  width: 445px;
  top: 60%;
  left: 50.5%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;

  @media (max-width: 812px) {
    width: 350px;
  }

  i {
    margin: 0px 41px;
    color: #fe2e2e;
    font-size: 14px;
    font-style: normal;
    font-weight: normal;

    @media (max-width: 812px) {
      margin-left: 25px;
    }
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
    display: block;
    border-radius: 4px;
    margin: 10px 39px;
    margin-top: 38px;
    margin-bottom: 0px;
    padding: 16px 15px 16px;
    width: 75%;
    background: #f5f7fa;
    outline: none;

    @media (max-width: 812px) {
      margin-left: 25px;
    }

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
    margin-left: 39px;
    padding: 16px 17px;
    width: 74%;
    margin-top: 11px;
    background: #f5f7fa;
    outline: none;

    @media (max-width: 812px) {
      margin-left: 25px;
    }
  }

  input[type="password"] {
    border: 1px solid #c9d6f0;
  }

  input[type="checkbox"] {
    margin: 10px 41px 0px;
    margin-right: 11.6px;
    cursor: pointer;

    @media (max-width: 812px) {
      margin-left: 25px;
    }
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
    width: 82%;
    color: #333333;
    font-weight: 500;
    font-size: 16px;
    font-family: "Avenir Next";
    background-color: #75ebeb;
    border-radius: 4px;
    border: 1px solid #75ebeb;
    cursor: pointer;

    @media (max-width: 812px) {
      margin-left: 25px;
    }
  }

  h5 {
    margin: 0px 40px 22px;
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

    @media (max-width: 812px) {
      margin-left: 25px;
    }
  }

  .lds-ellipsis {
    display: block;
    position: relative;
    width: 82%;
    height: 50px;
    margin: 16px auto 10px;
    border-radius: 4px;
    border: 1px solid #75ebeb;
    background-color: #75ebeb;

    @media (max-width: 812px) {
      margin-left: 25px;
    }
  }

  .lds-ellipsis div {
    display: block;
    position: absolute;
    margin-top: 5%;
    margin-left: 40%;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);


    @media (max-width: 812px) {
    margin-left: 37%;
     margin-top: 7%;
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
    margin-left: 39px;
    padding: 16px 17px;
    width: 74%;
    margin-top: 11px;
    background: #f5f7fa;
    border: 1px solid #c9d6f0;
    outline: none;
  }

  div {
    position: absolute;
    top: 13px;
    left: 82%;
    width: 24px;
    height: 23px;
    background: url("./img/view.svg") no-repeat;
    cursor: pointer;
    :hover {
      opacity: 0.6;
    }

    @media (max-width: 812px) {
      left: 78%;
    }
  }
`;
