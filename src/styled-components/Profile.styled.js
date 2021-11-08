import styled from "styled-components";

export const AboutAccount = styled.div`
  position: relative;
  width: 460px;
  top: 21vh;
  border-radius: 10px;
  background: white;
  padding: 3px;

  @media (max-width: 992px) {
    width: 350px;
  }

  @media (max-width: 767px) {
    max-width: none;
  }

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
    width: 70%;
    height: 40px;
    background-color: #75ebeb;
    display: block;
    border: none;
    text-align: center;
    cursor: pointer;
    color: #000000;
    transition: 0.25s;
    font-family: "Avenir Next";
    font-size: 16px;
    border-radius: 4px;
    margin: 80px auto;

    :hover {
      background: #fa5858;
      color: #fff;
    }
  }
`;
