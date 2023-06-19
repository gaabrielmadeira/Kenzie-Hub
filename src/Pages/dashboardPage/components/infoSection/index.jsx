import { StyledInfoSection } from "./style";
import { StyledContent } from "./style";
import { StyledTitleBig } from "../../../../styles/typograph";
import { StyledParagraph } from "../../../../styles/typograph";

export const InfoSection = ({ user }) => {
  return (
    <StyledInfoSection>
      <StyledContent>
        <div className="welcome">
          <StyledTitleBig fontSize="big" lineheight="big">Olá, {user.name}</StyledTitleBig>
        </div>
        <StyledParagraph>{user.course_module}</StyledParagraph>
      </StyledContent>
    </StyledInfoSection>
  )
}