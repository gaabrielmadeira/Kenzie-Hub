import { css, styled } from "styled-components";

export const textStyleTitle = css`
  font-size: ${({fontSize})=> (fontSize === "big" && "var(--font-size-0)") || (fontSize === "small" && "var(--font-size-2)") || "var(--font-size-1)"};
	font-family: var(--font-primary);
	font-weight: var(--font-weight-0);
	font-style: normal;
	line-height: ${({lineheight})=> lineheight ==="big" ? "1.75rem" : "1.625rem"};
	text-decoration: none;
	text-transform: none;
  color: var(--color-grey-0);
`
export const textStyleHeadline = css`
  font-size: ${({fontSize}) => fontSize ==="small" ? "var(--font-size-4)" : "var(--font-size-3)"};
  font-family: var(--font-primary);
  font-weight: ${({fontWeight}) => (fontWeight === "bold" && "var(--font-weight-0)") || (fontWeight === "medium" && "var(--font-weight-1)") || "var(--font-weight-3)"};
  font-style: ${({fontStyle}) => fontStyle === "italic" ? "italic" : "normal"};
  line-height: ${({lineheight}) => lineheight === "big" ? "1.375rem" : "1.125rem"};
  text-decoration: none;
  text-transform: none;            
  color: ${({fontcolor}) => fontcolor === "label" ? "var(--color-grey-0)" : "var(--color-grey-1)"};
`
export const StyledTitleBig = styled.h1`
   ${textStyleTitle}
`
export const StyledTtitleNormal = styled.h2`
  ${textStyleTitle}
`
export const StyledTitleSmall = styled.h3`
  ${textStyleTitle}
`
export const StyledLabel = styled.label`
  ${textStyleHeadline}
`
export const StyledParagraph = styled.p`
  ${textStyleHeadline}
`

