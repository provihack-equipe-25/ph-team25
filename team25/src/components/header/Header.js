import React from "react"
import { HeaderContainer } from "./styledHeader"
import logo from "../../assets/logo/logoblack.png"
import { useNavigate } from "react-router-dom"
import BaseButton from "../base-button/BaseButton"

export default function Header() {
  const navigate = useNavigate()
  const loggedin = localStorage.getItem("@userToken")

  return (
    <HeaderContainer>
      <div className="links">
        <img
          onClick={() => {
            loggedin ? navigate("/dashboard") : navigate("/")
          }}
          src={logo}
          alt="TryAgain logo"
        />
        <a onClick={() => {
            loggedin ? navigate("/dashboard") : navigate("/")
          }} id="home">
          Home
        </a>
        <a>Encontrar Parceiros</a>
        <a>Blog</a>
        <a>Sobre</a>
      </div>
      {loggedin ? (
        <BaseButton color="mainYellow" shadow="none"
          onClick={() => {
            localStorage.clear()
            navigate("/")
          }}
        >
          Sair
        </BaseButton>
      ) : (
        <BaseButton onClick={() => navigate("/login")}>Login</BaseButton>
      )}
    </HeaderContainer>
  )
}
