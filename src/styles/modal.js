import styled from "styled-components";

export const StyledOverlay = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.25);;

  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledModalBox = styled.div`
  width: clamp(250px, 80%, 369px);
  height: 300px;

  border-radius: 0.3125rem;

  background: var(--color-white);
`

export const StyledHeaderModal = styled.div`
  width: 100%;
  height: 50px;

  padding: 0.75rem 1.25rem;
  background: var(--color-grey-2);
  border-radius: 4px 4px 0px 0px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const StyledModalForm = styled.form`
  width: 100%;
  height: 100%;

  padding: 1.5625rem 1.25rem 2.1875rem 1.25rem;
  background: var(--color-grey-3);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.4rem;
`