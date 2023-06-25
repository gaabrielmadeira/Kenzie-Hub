import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
	--color-primary: #ff577f;
	--color-primary-50: #ff427f;
	--color-primary-disable: #59323f;
	--color-grey-4: #121214;
	--color-grey-3: #212529;
	--color-grey-2: #343b41;
	--color-grey-1: #868e96;
	--color-grey-0: #f8f9fa;
	--color-negative: #e83f5b;
  --color-white: #FFFFFF;
  --color-error: #ED2B2A;

  --font-primary: "Inter", sans-serif;
  --font-secundary: "Nunito", sans-serif;

  --font-weight-0: 700;
  --font-weight-1: 600;
  --font-weight-2: 500;
  --font-weight-3: 400;

  --font-size-0: 1.125rem;
  --font-size-1: 1rem;
  --font-size-2: 0.875rem;
  --font-size-3: 0.75rem;
  --font-size-4: 0.625rem;
}
`
export const StyledHeader = styled.header`
  width: 100%;
  max-width: ${({widht}) => widht === "small" ? "369px" : "1200px"};
  
  padding: 15px;
  display: flex;
  justify-content: space-between;
`
