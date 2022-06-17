import styled from "styled-components";

export const OVERALL = styled.div`
  /* display: flex;
  flex-direction: column; */
  padding: 70px;
  background-color: #081d3c;

  .inner-div {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    /* align-items: center; */
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
    border-top: 5px solid #ffbb12;
    width: 17%;
    opacity: 1;
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
    font-weight: 600;
  }

  span {
    color: #ffbb12;
    font-weight: 600;
  }
  .left-side {
    width: 50%;
    /* padding: 20px; */
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
    /* padding: 20px; */
    /* margin: 10px; */
    img {
      width: 90%;
      margin-right: 10px;
    }
    p {
      /* background-color: red; */
    }
  }
`;
