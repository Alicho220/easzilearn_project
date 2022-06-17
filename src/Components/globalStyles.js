import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin:0 ;
    padding: 0;
    /* background-color:red !important ; */
    /* font-family: ; */
    
}
`;
export const Container = styled.div`
  display: flex;
  z-index: 1;
  width: 100%;
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 50px;
  padding-right: 50px;

  @media screen and (max-width: 769px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
