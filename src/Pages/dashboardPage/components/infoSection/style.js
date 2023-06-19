import styled from "styled-components";

export const StyledInfoSection = styled.section`
  width: 100%;
  border-top: 1px solid var(--color-grey-3);
  border-bottom: 1px solid var(--color-grey-3);
  display: flex;
  justify-content: center;
`
export const StyledContent = styled.div`
  width: 100%; 
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
  align-items: flex-start;
  padding: 2.1875rem 0.75rem;

  @media(min-width: 950px){
    flex-direction: row;
    justify-content: space-between;
  }
`
