import { forwardRef } from "react";
import { StyledSelect } from "../../styles/inputs";
import { StyledLabel } from "../../styles/typograph";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { StyledArrow } from "./style";
import { StyledSelectcontainer } from "./style";

export const Select = forwardRef(({ label, value, ...rest }, ref) => {
  return (
    <StyledSelectcontainer>
      <StyledLabel fontcolor="grey-0">{label}</StyledLabel>
      <StyledSelect ref={ref} {...rest}>
        <option value={value}>Primeiro módulo(Introdução ao Frontend)</option>
        <option value={value}>Segundo módulo(Frontend Avançado)</option>
        <option value={value}>Terceiro módulo(Introdução ao Backend)</option>
        <option value={value}>Quarto módulo(Backend Avançado)</option>
      </StyledSelect>
      <StyledArrow>
          <MdOutlineKeyboardArrowDown />
      </StyledArrow>
    </StyledSelectcontainer>
  )
})

export const Modalselect = forwardRef(({ label, value, ...rest }, ref) => {
  return (
    <StyledSelectcontainer>
      <StyledLabel fontcolor="grey-0">{label}</StyledLabel>
      <StyledSelect ref={ref} {...rest}>
        <option value={value}>Iniciante</option>
        <option value={value}>Intermediário</option>
        <option value={value}>Avançado</option>
      </StyledSelect>
      <StyledArrow>
          <MdOutlineKeyboardArrowDown />
      </StyledArrow>
    </StyledSelectcontainer>
  )
})