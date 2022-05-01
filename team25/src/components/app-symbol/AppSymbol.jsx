import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../../assets/logo/appsymbol.png"

const Symbol = styled.div`
cursor: pointer;
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

  const navigate = useNavigate()

  return <Symbol onClick={() => navigate('/')}>
  <img src={logo} alt='app symbol'/>
  </Symbol>
}
