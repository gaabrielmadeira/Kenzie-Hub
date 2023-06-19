import { styled, css } from "styled-components";

const StyledTextButton = css`
  font-family: var(--font-primary);
  font-weight: var(--font-weight-2);
  line-height: 165%;

  color: var(--color-white);
`

export const StyledButton = styled.button`
  ${StyledTextButton}
  border-radius: 4px;

  ${({ buttonsize }) => {
    switch (buttonsize) {
      case "header":
        return css`
          width: 68px;
          height: 32px;
          font-size: var(--font-size-3);
        `
      default:
        return css`
          width: 100%;
          height: 48px;
          font-size: var(--font-size-1);
        `
    }
  }}

 
  ${({ buttonstyle }) => {
    switch (buttonstyle) {
      case "primary":
        return css`
        background: var(--color-primary);
        border: 1px solid var(--color-primary);
        :hover{
          transition: 0.6s;
          background: var(--color-primary-50);
          border: 1px solid var(--color-primary-50);
        }
        
        :active{
          background: var(--color-primary-50);
          border: 1px solid var(--color-primary-50);
        }
        `
      case "disable":
        return css`
        background: var(--color-grey-1);
        border: 1px solid var(--color-grey-1);
        :hover{
          transition: 0.6s;
          background: var(--color-grey-2);
          border: 1px solid var(--color-grey-2);
        }
        
        :active{
          background: var(--color-grey-2);
          border: 1px solid var(--color-grey-2);
        }
        `
      case "negative":
        return css`
        background: var(--color-primary-disable);
        border: var(--color-primary-disable);
        `

      case "header":
        return css`
        background: var(--color-grey-3);
        border: var(--color-grey-3);
        `
    }
  }}
`


