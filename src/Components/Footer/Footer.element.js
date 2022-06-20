import styled from "styled-components";

export const OVERALL = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0d1623;
  .inner-div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 80%;
    min-height: 100vh;
    margin-top: 80px;

    img {
    }
  }
  .logo-div {
    display: flex;
    flex-direction: row;
    img {
      width: 120px;
      margin-bottom: 80px;
    }
  }
  .label {
    color: #fff;
    background: #f1421d;
    font-size: 10px;
    padding: 2px 8px;
    border-radius: 6px;
  }
  .information-div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h6 {
      color: #fff;
      font-weight: 700;
      margin-bottom: 1rem;
      font-size: 14px;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      color: #7a787c;
      font-size: 14px;
      margin-bottom: 8px;
      font-weight: 500;
    }
  }
  .social-div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 100px;
    h6 {
      color: #fff;
      font-weight: 700;
      margin-bottom: 1rem;
      font-size: 14px;
    }
  }
  svg {
    color: #7a787c;
    font-size: 26px;
  }

  p {
    color: #7a787c;
    font-size: 14px;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  span,
  small {
    color: #74bd98;
  }

  form {
    display: flex;
    justify-content: space-between;
    gap: 6px;
    margin-top: 20px;

    input {
      height: 45px;
      border-radius: 10px;
      font-size: 13px;
      width: 75%;
      border: none;
      outline: none;
      display: flex;
    }

    button {
      color: #fff;
      background: #459653;
      border-radius: 10px;
      font-size: 13px;
      width: 25%;
      border: none;
      font-family: "Raleway";
      font-weight: bold;
    }
  }
  .reserved-div {
    display: flex;
    justify-content: ceter;
    margin-top: 100px;
    font-family: "Raleway";
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    .information-div {
      display: flex;
      flex-direction: column;
      width: 100%;

      justify-content: space-between;
    }
    .social-div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 100px;
    }
  }
  .reserved-div {
    display: flex;
    justify-content: center;
    margin-top: 100px;
    font-family: "Raleway";
    font-weight: bold;
  }
  .logo-div {
    display: flex;
    flex-direction: row;
    img {
      width: 120px;
      margin-bottom: 20px;
    }
  }
`;
