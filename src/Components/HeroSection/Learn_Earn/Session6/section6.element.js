import styled from "styled-components";

export const OVERALL = styled.div`
  display: flex;
  padding: 70px;
  width: 100%;
  background-color: #e8f7f7;

  .inner-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
  }
  span {
  }
  h1 {
    font-size: 58px;
    line-height: 52px;
    color: #008e51;
    font-family: "Poppins, Helvetica, Arial, Lucida, sans-serif";
    font-weight: 800;
    margin-bottom: 3rem;
  }
  hr {
    border: 3px solid #081d3c;
    opacity: 1;
    margin-bottom: 3rem;
    background: #081d3c;
    width: 20%;
  }
  .text-area {
    width: 90%;
    p {
      color: #666666;
      text-align: left;
      font-size: 18px;
      line-height: 50px;
      /* padding: 20px; */
    }
    span {
      color: #ffbb12;
      font-weight: 600;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;
