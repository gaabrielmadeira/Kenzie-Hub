import { StyledTechCard } from "./style"; 
import { StyledTtitleNormal, StyledParagraph } from "../../../../../../styles/typograph";
import { useContext } from "react";
import { techContext } from "../../../../../../providers/techContext";

export const TechnologiesCards = ({title, status, id}) => {
  const {openEdit} = useContext(techContext);

  return (
    <StyledTechCard onClick={() => openEdit(id, title)}>
      <StyledTtitleNormal fontSize="small">{title}</StyledTtitleNormal>
      <StyledParagraph className="status">{status}</StyledParagraph>
    </StyledTechCard>
  )
}