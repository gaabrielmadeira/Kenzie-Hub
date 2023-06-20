import { StyledTtitleNormal, StyledTitleSmall } from "../../../../styles/typograph";
import { StyledWarningSection } from "./style";
import { StyledContainer } from "../../../../styles/container";

export const WarningSection = () => {
  return (
    <StyledContainer>
      <StyledWarningSection>
        <StyledTtitleNormal fontSize="big" lineheight="big">Que pena! Estamos em desenvolvimento :(</StyledTtitleNormal>
        <StyledTitleSmall fontcolor="white" fontweight="normal">Nossa aplicação está em desenvolvimento, em breve teremos novidades</StyledTitleSmall>
      </StyledWarningSection>
    </StyledContainer>
  )
}