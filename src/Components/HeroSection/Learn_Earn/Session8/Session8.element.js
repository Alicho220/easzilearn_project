import styled from "styled-components";

export const OVERALL = styled.div`
  background-color: #e8f7f7;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;

  .inner-div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: center;
    width: 90%;

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
    color: #008e51;
    font-family: "Poppins,Lucida";
    font-family: Helvetica, Arial, sans-serif;
    text-align: center;
    font-weight: 800;
    text-shadow: 2px 2px #fff;

    line-height: 58px;
  }
  hr {
    border-top: 5px solid #081d3c;
    width: 90%;
    opacity: 1;
    margin-top: 4rem;
    margin-bottom: 4rem;
    background-color: #fff;
  }
  p {
    color: #666666;
    font-size: 18px;
    font-family: "Raleway";
    line-height: 30px;
    margin-bottom: 20px;
  }
  h2 {
    color: #081d3c;
    font-weight: 800;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  span {
    color: #ffbb12;
    font-weight: 600;
  }
  .left-side {
    width: 50%;
  }
  .right-side {
    margin-left: 50px;
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
    flex-direction: row;
    margin-bottom: 1rem;
    p {
      margin-left: 10px;
    }
    h2 {
      margin-left: 10px;
    }

    img {
      /* width: 100%; */
      /* height: 95%; */
      /* padding: 10px; */
    }
  }
  .ticked-section {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
    p {
      /* font-size: 12px; */
      /* background-color: red; */
      margin-left: 10px;
    }

    img {
      width: 5%;
      height: 5%;
      color: #081d3c;
      margin-top: 20px;
    }
  }
  .green-span {
    color: #008e51;
    font-weight: 800;
  }
  @media screen and (max-width: 768px) {
    padding: 35px;
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
        color: #666666;
        font-size: 16px;
        font-family: "Raleway";
        line-height: 25px;
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
      margin-left: 0px;
      margin-right: 0px;
      /* background-color: red; */

      img {
        width: 100%;

        border-radius: 80px;
      }
    }
    .numbered-session {
      display: flex;

      img {
        margin-right: 1px;
        margin-top: 15px;
        width: 30px;
      }
      p {
        font-size: 16px;
        margin-left: 10px;
      }
    }
    .ticked-section {
      display: flex;
      flex-direction: row;
      margin-bottom: 1rem;
      p {
        font-size: 16px;
        margin-left: 10px;
      }

      img {
        width: 8%;
        height: 8%;
        margin-top: 20px;
      }
    }
  }
`;
