import styled from "styled-components";

export const OVERALL = styled.div`
  /* padding: 70px; */
  width: 100%;
  background-color: #081d3c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;

  .inner-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    width: 90%;
  }
  .header-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }

  h1 {
    font-size: 58px;
    line-height: 52px;
    color: #ffbb12;
    font-family: "Poppins,Lucida";
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 800;
    margin-bottom: 3rem;
  }
  hr {
    border: 3px solid #fff;
    opacity: 1;
    margin-bottom: 3rem;
    background: #fff;
    width: 90%;
  }
  .text-area {
    width: 90%;
    p {
      color: #fff;
      text-align: left;
      font-size: 18px;
      line-height: 50px;
    }
    span {
      color: #ffbb12;
      font-weight: 600;
    }
  }
  .numbered-session {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
    p {
      margin-left: 10px;
    }
    h2 {
      color: #ffbb12;
    }

    img {
      width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    .text-area {
      width: 100%;

      p {
        color: #fff;
        font-size: 16px;
        font-family: "Raleway";
        line-height: 30px;
        margin-bottom: 20px;
      }
    }
    .numbered-session {
      display: flex;
      flex-direction: row;
      margin-bottom: 1rem;
      p {
        margin-left: 30px;
        line-height: 30px;
      }
      h2 {
        color: #ffbb12;
        margin-left: 10px;
      }

      img {
        width: 200%;
      }
    }
  }
`;
