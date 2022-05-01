import React from "react"
import { ButtonContainer } from "./styledBaseButton"

export default function BaseButton(props) {
  return (
    <ButtonContainer onClick={props.onClick} textColor={props.textColor} color={props.color}>
      {props.children}
    </ButtonContainer>
  )
}
