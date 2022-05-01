import React from "react"
import styled from "styled-components"
import logo from "../../assets/logo/appsymbol.png"

const Symbol = styled.div`
  position: absolute;
  width: 46px;
  height: 64px;
  left: 40px;
  top: 36px;
  img{
    width: 100%;
  }
`

export default function AppSymbol() {
  return <Symbol>
  <img src={logo} alt='app symbol'/>
  </Symbol>
}
