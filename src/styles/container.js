import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  ${({ height }) => {
    switch (height) {
      case "header":
        return css`
          height: 72px;
        `
      case "body":
        return css`
          height: 100vh;
        `
    }
  }}

  padding: 1.875rem 0.75rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`