import React from "react"
import { HeaderContainer } from "./styledHeader"
import logo from "../../assets/logo/logoblack.png"
import { useNavigate } from "react-router-dom"
import BaseButton from "../base-button/BaseButton"

export default function Header() {
  const navigate = useNavigate()
  const loggedin = localStorage.getItem("token")

  return (
    <HeaderContainer>
      <div className="links">
        <img onClick={() => navigate("/")} src={logo} alt="TryAgain logo" />
        <a href="/" id="home">
          Home
        </a>
        <a href="/search">Encontrar Parceiros</a>
        <a href="/">Blog</a>
        <a href="">Sobre</a>
      </div>
      {loggedin ? (
        <BaseButton>Sair</BaseButton>
      ) : (
        <BaseButton onClick={() => navigate("/login")}>Login</BaseButton>
      )}
    </HeaderContainer>
  )
}