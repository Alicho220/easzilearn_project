import styled from "styled-components";

export const OVERALL = styled.div`
  /* padding: 70px; */
  background-color: #081d3c;
  position: relative;

  .img {
    top: -10px;
    left: -9px;

    height: 100px;
    width: 100%;
    padding: 0;
    position: absolute;
    border-radius: 0;
  }

  .inner-div {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .header-div {
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ; */
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
    font-size: 16px;
    font-family: "Raleway";
    line-height: 30px;
    margin-bottom: 20px;
  }

  span {
    color: #ffbb12;
    font-weight: 600;
  }
  .left-side {
    width: 50%;
    padding: 10px;
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
    margin-bottom: 20px;
    img {
      width: 70%;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 35px;
    .row-div {
      display: flex;
      flex-direction: column;
      padding: 0px;
    }
    .left-side {
      width: 100%;
      padding: 0px;
      margin-bottom: 20px;

      p {
        color: #666666;
        font-size: 16px;
        font-family: "Raleway";
        line-height: 25px;
        margin-bottom: 20px;
      }
    }
    .right-side {
      width: 100%;
      padding: 0;
      img {
        border-radius: 80px;
      }
    }
  }
`;
