import React from "react"
import logowhite from "../../assets/logo/G300xWHITE.png"
import logoblack from "../../assets/logo/G300x.png"
import { LoadingContainer } from "./styledLoading"

export default function Loading(props) {
  return (
    <LoadingContainer>
      <img
        src={props.color === "white" ? logowhite : logoblack}
        alt="tryagain logo"
      />
    </LoadingContainer>
  )
}
