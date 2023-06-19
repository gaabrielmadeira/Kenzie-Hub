import styled from "styled-components";

export const StyledFormSection = styled.section`
  width: 100%;
  max-width: 369px;
  height: clamp(402px, 100%, 890px);


  background: var(--color-grey-3);
  border-radius: 3px;
  padding: 1.25rem 0.9375rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`
export const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 12px;
`