import styled from "styled-components";

export const OVERALL = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #e8f7f7;
  min-height: 10vh;
  .inner-div {
    width: 80%;
  }
  .logo-header {
    padding: 30px 0;

    img {
      width: 130px;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0 1% 5rem;

    .logo-header {
      display: flex;
      justify-content: center;
    }
  }
`;
