import { css, styled } from "styled-components";

const StyledPlaceholder = css`
  font-family: var(--font-primary);
  font-weight: var(--font-weight-3);
  font-size: var(--font-size-1);
  line-height: 163%;

  color: var(--color-grey-1);
`
const StyledInputText = css`
  font-family: var(--font-primary);
  font-weight: var(--font-weight-3);
  font-size: var(--font-size-1);
  line-height: 163%;

  color: var(--color-grey-0);
`

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;

  ${StyledInputText}

  ::placeholder{
    ${StyledPlaceholder}
  }

  background: var(--color-grey-2);
  border: 1px solid var(--color-grey-2);
  border-radius: 3px;
  padding: 0.625rem 1rem;
  margin-top: 0.3125rem;


  :focus{
    border: 1px solid var(--color-grey-0);
  }
`
export const StyledSelect = styled.select`
  width: 100%;
  height: 40px;

  background: var(--color-grey-2);
  border: 1px solid var(--color-grey-2);
  border-radius: 3px;
  padding: 0.625rem 1rem;
  margin-top: 0.3125rem;
  appearance: none;
  color: var(--color-grey-1);
  cursor: pointer;

  :focus{
    border: 1px solid var(--color-grey-0);
  }
`


  