import { styled, css } from "styled-components";

export const StyledButtonClose = styled.button`
  color: var(--color-grey-1);
  font-size: var(--font-size-2);
  font-family: var(--font-secundary);
  font-weight: var(--font-weigth-1);
  line-height: 1.625rem;
`

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
      case "add":
        return css`
          width: 32px;
          height: 32px;
          font-size: var(--font-size-0);
        `
      case "delete":
        return css`
          width: clamp(70px, 30%, 120px);
          height: 48px;
        `
      case "modify":
        return css`
          width: clamp(150px, 60%, 204px);
          height: 48px;
        `
      default:
        return css`
          width: 100%;
          height: 48px;
        `
    }
  }}

 
  ${({ buttonstyle }) => {
    switch (buttonstyle) {
      case "primary":
        return css`
          background: var(--color-primary);
          border: 1px solid var(--color-primary);  
          &:hover {
            transition: 0.3s;
            background: var(--color-primary-50);
            border: 1px solid var(--color-primary-50);
          }

          &:active {
            background: var(--color-primary-50);
            border: 1px solid var(--color-primary-50);
          }
        `
      case "disable":
        return css`
          background: var(--color-grey-1);
          border: 1px solid var(--color-grey-1);
          &:hover {
            transition: 0.3s;
            background: var(--color-grey-2);
            border: 1px solid var(--color-grey-2);
          }

          &:active {
            background: var(--color-grey-2);
            border: 1px solid var(--color-grey-2);
          }
        `
      case "negative":
        return css`
          background: var(--color-primary-disable);
          border: 1px solid var(--color-primary-disable);
        `

      case "header":
        return css`
          background: var(--color-grey-3);
          border: 1px solid var(--color-grey-3);
          &:hover {
            background: var(--color-grey-2);
            border: 1px solid var(--color-grey-2);
          }
        `
    }
  }}
`


