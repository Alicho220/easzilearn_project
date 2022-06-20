import styled from "styled-components";

export const OVERALL = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e8f7f7;

  .inner-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 95%;
  }
  .header-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-top: 50px;
    h1 {
      font-size: 52px;
      line-height: 52px;
      color: #008e51;
      text-shadow: 2px 2px #fff;
    }
    hr {
      border-top: 5px solid #ffbb12;
      width: 20%;
      opacity: 1;
      margin-top: 1rem;
      margin-bottom: 4rem;
      background-color: #ffbb12;
    }
  }
  .card-div {
    display: flex;
    flex-direction: row;
  }

  .card {
    background-color: #16a085;
    width: 20%;
    border-radius: 100px;
    text-align: center;
    min-height: 100vh;
    margin-right: 30px;
    h2 {
      color: #fff;
      margin-top: 30px;
      font-family: "Poppins,Lucida";
      font-family: Helvetica, Arial, sans-serif;
    }
    hr {
      border-top: 0.5px solid #ffbb12;
      width: 100%;
      opacity: 1;
      margin-top: 2.5rem;
      margin-bottom: 2.5rem;
      background-color: #ffbb12;
    }
    .down-hr {
      margin-bottom: 4rem;
      width: 93%;
      color: red;
    }
    .span1 {
      color: #ffbb12;
      font-weight: 600;
    }
    .span2 {
      color: #000;
      /* font-weight: 400; */
    }
  }
  .first {
    display: flex;
    padding: 5px;

    svg {
      font-size: 35px;
      margin-bottom: 80px;
      font-weight: 10;
    }
    p {
      font-size: 18px;
      font-family: "Raleway";
      font-family: "Lucida";
      font-family: Helvetica, Arial, sans-serif;
      margin: 0px;
      margin-left: 10px;
      text-align: left;
      line-height: 30px;
      color: #fff;
    }
  }
  .card2 {
    background-color: #e09900;
  }
  .card5 {
    margin-right: 0px;
  }
  .closeIcon {
    color: #aa3c17;
  }
  .markedIcon {
    color: #081d3c;
  }
  @media screen and (max-width: 768px) {
    .card-div {
      display: flex;
      flex-direction: column;
    }
  }
  .card {
    width: 100%;
    margin-bottom: 50px;
  }
`;
