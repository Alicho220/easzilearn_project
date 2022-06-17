import styled from "styled-components";

export const OVERALL = styled.div`
  background-color: #008e51;
  .inner-div {
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 58px;
      color: #ffbb12;
      font-family: "Poppins, Helvetica, Arial, Lucida, sans-serif";
      text-align: center;
      font-weight: 800;

      line-height: 58px;
    }
    hr {
      border-top: 5px solid #fff;
      width: 17%;
      opacity: 1;
      margin-bottom: 4rem;
    }
  }
  .inner-row {
    display: flex;
    flex-direction: row;
    padding: 10px;
  }
  .left-side {
    width: 50%;
    padding: 50px;
    img {
      width: 100%;
      border-radius: 150px;
    }
  }
  .right-side {
    width: 50%;

    padding: 50px;

    p {
      color: #fff;
      font-size: 18px;
      font-family: "Raleway";
      line-height: 25px;
      margin-bottom: 20px;
      font-weight: 500;
    }

    span {
      color: #ffbb12;
      font-weight: 600;
    }
  }
  .numbered-session {
    display: flex;
    img {
      width: 80%;
    }
  }
`;
