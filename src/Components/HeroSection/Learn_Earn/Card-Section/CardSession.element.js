import styled from "styled-components";

export const OVERALL = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
    }
    hr {
      border-top: 0.5px solid #ffbb12;
      width: 100%;
      opacity: 1;
      margin-top: 2.5rem;
      margin-bottom: 2.5rem;
      background-color: #ffbb12;
    }
  }
  .first {
    display: flex;
    padding: 5px;

    svg {
      font-size: 36px;
      margin-bottom: 80px;
      font-weight: 100;
    }
    p {
      font-size: 18px;
      margin: 0px;
      margin-left: 10px;
      text-align: left;
      color: #fff;
    }
  }
  .closeIcon {
    color: #aa3c17;
  }
  .markedIcon {
    color: #081d3c;
  }
`;
