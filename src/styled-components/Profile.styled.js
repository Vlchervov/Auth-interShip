import styled from "styled-components";

export const AboutAccount = styled.div`
  position: relative;
  width: 26vw;
  height: 54vh;
  left: 38.4vw;
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
    width: 17.1875vw;
    height: 4vh;
    position: absolute;
    background-color: #75ebeb;
    display: block;
    bottom: 7%;
    border: none;
    left: 4.5vw;
    text-align: center;
    cursor: pointer;
    color: #000000;
    transition: 0.25s;
    font-family: "Avenir Next";
    font-size: 16px;
    border-radius: 4px;

    :hover {
      background: #fa5858;
      color: #fff;
    }
  }
`;
