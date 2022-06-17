import styled from "styled-components";

export const OVERALL = styled.div`
  .inner-div {
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 58px;
      color: #008e51;
      font-family: "Poppins, Helvetica, Arial, Lucida, sans-serif";
      text-align: center;
      font-weight: 800;

      line-height: 58px;
    }
    hr {
      border-top: 5px solid #081d3c;
      width: 17%;
      opacity: 1;
      margin-bottom: 4rem;
    }
  }
  .inner-row {
    display: flex;
    flex-direction: row;
    /* padding: 10px; */
  }
  .left-side {
    width: 70%;
    padding: 50px;
    img {
      width: 100%;
      border-radius: 150px;
    }
  }
  .right-side {
    width: 50%;

    padding: 70px;

    p {
      color: #666666;
      font-size: 18px;
      font-family: "Raleway";
      line-height: 25px;
      margin-bottom: 20px;
    }

    span {
      color: #ffbb12;
      font-weight: 600;
    }
  }
`;
