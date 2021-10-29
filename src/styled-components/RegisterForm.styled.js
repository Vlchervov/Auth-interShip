import styled from "styled-components";

export const MainRegistrationForm = styled.form`
  position: absolute;
  top: 20.5vh;
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
    width: 366px;
    height: 49px;
    cursor: pointer;
  }

  button:disabled {
    background-color: #d8d8d8;
    border: 1px solid #d8d8d8;
    cursor: auto;
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
`;
