import React from "react"
import { ButtonContainer } from "./styledBaseButton"

export default function BaseButton(props) {
  return (
    <ButtonContainer onClick={props.onClick} color={props.color}>
      {props.children}
    </ButtonContainer>
  )
}
