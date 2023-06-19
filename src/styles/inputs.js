import { styled } from "styled-components";


export const StyledInput = styled.input`
  width: 100%;
  height: 40px;

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

  :focus{
    border: 1px solid var(--color-grey-0);
  }
`


  