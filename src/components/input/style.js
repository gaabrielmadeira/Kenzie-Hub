import {styled} from "styled-components";

export const StyledInputContainer = styled.div`
  position: relative;

  .icon{
    position: absolute;
    top: 55%;
    left: 85%;
    color: var(--color-grey-1);
  }
`
export const StyledErrorMessage = styled.div`
  width: 100%;
  height: auto;

  .errortext{
    font-size: var(--font-size-3);
    font-weight: var(--font-weight-3);
    color: var(--color-error);
  }
`