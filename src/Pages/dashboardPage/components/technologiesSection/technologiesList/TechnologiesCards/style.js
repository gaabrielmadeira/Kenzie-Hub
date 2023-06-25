import styled from "styled-components";

export const StyledTechCard = styled.li`
  width: 100%;
  height: 49px;

  background: var(--color-grey-4);
  border-radius: 4px;
  padding: 0.75rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover{
    cursor: pointer;
    background: var(--color-grey-2);
    .status{
      color: var(--color-grey-0);
    }
  }
`