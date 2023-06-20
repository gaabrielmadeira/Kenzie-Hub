import styled from "styled-components";

export const StyledWarningSection = styled.section`
  width: 100%;
  max-width: 1200px;
  height: auto;
  
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.9375rem;

  @media(min-width: 950px){
    display: flex;
  }
`