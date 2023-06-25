import { StyledInfoSection } from "./style";
import { StyledContent } from "./style";
import { StyledTitleBig } from "../../../../styles/typograph";
import { StyledParagraph } from "../../../../styles/typograph";
import { useContext } from "react";
import { userContext } from "../../../../providers/userContext";

export const InfoSection = () => {

  const {user} = useContext(userContext);

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