import styled from "styled-components";

export const SpinneContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledSpinner = styled.div`
  width: 150px;
  height: 150px;
  position: absolute;
  border: 4px solid var(--colo-grey-4);
  border-top: 10px solid var(--color-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
  0% { transform: 
    rotate(0deg); 
  }
  100% { 
    transform: rotate(360deg); 
  }
}
`