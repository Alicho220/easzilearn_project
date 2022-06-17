import styled from "styled-components";

export const OVERALL = styled.div`
  display: flex;
  padding: 70px;
  width: 100%;
  background-color: #e8f7f7;

  .inner-div {
    display: flex;
    flex-direction: column;
    /* width: 80%; */
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    /* background-color: red; */
  }
  span {
  }
  h1 {
    font-size: 58px;
    line-height: 52px;
    color: #008e51;
    font-family: "Poppins, Helvetica, Arial, Lucida, sans-serif";
    /* text-align: center; */
    font-weight: 800;
    margin-bottom: 2rem;
  }
  hr {
    border: 3px solid #081d3c;
    opacity: 1;
    margin-bottom: 1rem;
    background: #081d3c;
    width: 20%;
  }
  .text-area {
    background-color: red;
    p {
      color: #666666;
      text-align: left;
      font-size: 18px;
      line-height: 30px;
      padding:100px;
    }
  }
`;
