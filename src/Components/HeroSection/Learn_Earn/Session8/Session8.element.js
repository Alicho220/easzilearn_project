import styled from "styled-components";

export const OVERALL = styled.div`
  padding: 70px;
  background-color: #081d3c;

  .inner-div {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;

    align-items: center;

    .header-div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;
      margin-top: 100px;
    }
  }
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
    width: 100%;
    opacity: 1;
    margin-top: 2rem;
    margin-bottom: 4rem;
    background-color: #fff;
  }
  p {
    color: #fff;
    font-size: 18px;
    font-family: "Raleway";
    line-height: 30px;
    margin-bottom: 20px;
  }
  h2 {
    color: #ffbb12;
    font-weight: 600;
  }

  span {
    color: #ffbb12;
    font-weight: 600;
  }
  .left-side {
    width: 50%;
  }
  .right-side {
    padding: 20px;
    width: 50%;
    img {
      width: 100%;
      border-radius: 150px;
    }
  }
  .row-div {
    display: flex;
    flex-direction: row;
  }
  .numbered-session {
    display: flex;

    img {
      width: 90%;
      /* margin-right: 10px; */
    }
  }
  .ticked-section {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;

    img {
      width: 10%;
      padding: 0px 30px 0px 0px;
    }
  }
  @media screen and (max-width: 768px) {
    .inner-div {
      display: flex;
      flex-direction: column;
    }
    .row-div {
      display: flex;
      flex-direction: column;
      padding: 0px;
    }
    .left-side {
      width: 100%;
      padding: 0px;
      margin-bottom: 10px;
      p {
        color: #fff;
        font-size: 16px;
        font-family: "Raleway";
        line-height: 30px;
        margin-bottom: 20px;
      }
      h2 {
        color: #ffbb12;
        font-weight: 500;
        font-size: 23px;
      }
    }
    .right-side {
      width: 100%;
      padding: 0px;
      margin-bottom: 10px;
      img {
        width: 100%;
        margin: 30px;
        border-radius: 100px;
      }
    }
    .numbered-session {
      display: flex;

      img {
        width: 100%;
        margin-right: 10px;
      }
    }
  }
`;
