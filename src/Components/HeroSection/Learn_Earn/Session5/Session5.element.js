import styled from "styled-components";

export const OVERALL = styled.div`
  /* padding: 60px; */
  background-color: #081d3c;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .inner-div {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    .img {
      top: -10px;
      height: 100px;
      padding: 0;
      position: absolute;
      border-radius: 0;
    }

    .header-div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;
      margin-top: 50px;
    }
  }
  h1 {
    font-size: 58px;
    color: #ffbb12;
    font-family: "Poppins,Lucida";
    font-family: Helvetica, Arial, sans-serif;
    text-align: center;
    font-weight: 800;

    line-height: 58px;
  }
  hr {
    border-top: 5px solid #fff;
    width: 50%;
    opacity: 1;
    background-color: #fff;
    margin-top: 3rem;
    margin-bottom: 4rem;
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
  }

  span {
    color: #ffbb12;
    font-weight: 600;
  }
  .left-side {
    width: 50%;
    margin-right: 50px;
  }
  .right-side {
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
      width: 100%;
      margin-top: 20px;
    }
    p {
      margin-left: 10px;
    }
    h2 {
      margin-left: 10px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    .inner-div {
      display: flex;
      flex-direction: column;
    }
    .left-side {
      width: 100%;
      padding: 0px;
      margin-right: 0px;
      p {
        color: #fff;
        font-size: 16px;
        font-family: "Raleway";
        line-height: 25px;
        margin-bottom: 20px;
      }
    }
    .right-side {
      width: 100%;
      padding: 0px;
      margin-right: 0px;

      img {
        border-radius: 80px;
      }
    }
    .row-div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    p {
      color: #fff;
      font-size: 16px;
      font-family: "Raleway";
      line-height: 30px;
      margin-bottom: 20px;
    }
    h2 {
      color: #ffbb12;
    }

    span {
      color: #ffbb12;
      font-weight: 600;
    }
    .numbered-session {
      display: flex;
      justify-content: space-around;
      img {
        width: 80%;
        margin-right: 30px;
        padding: 2px;
      }
      p {
        margin-left: 10px;
      }
      h2 {
        margin-left: 10px;
      }
    }
  }
`;
