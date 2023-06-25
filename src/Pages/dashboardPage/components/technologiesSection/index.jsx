import { StyledTechnologiesSection } from "./style";
import { StyledContainer } from "../../../../styles/container";
import {TechnologiesAdd} from "./technologiesAdd";
import {TechnologiesList} from "./technologiesList";
import {TechnologiesCards} from "./technologiesList/TechnologiesCards";
import { useContext } from "react";
import { techContext } from "../../../../providers/techContext";

export const TechnologiesSection = () => {
  const {techList} = useContext(techContext);

  return (
    <StyledContainer>
      <StyledTechnologiesSection>
        <TechnologiesAdd />
        <TechnologiesList>
          {techList.map((tech) => (
            <TechnologiesCards key={tech.id} id={tech.id} title={tech.title} status={tech.status}/>
          ))}
        </TechnologiesList>
      </StyledTechnologiesSection>
    </StyledContainer>
  );
}