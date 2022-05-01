import React from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../components/header/Header"
import { FirstSection, HomeContainer, SecondSection } from "./styledHome"

export default function Home() {
  const navigate = useNavigate()

  return (
    <HomeContainer>
      <Header />
      <FirstSection>
        <div className="info">
          <h1>Reduzir, reutilizar e reciclar</h1>
          <p>
            Cerca de 170 mil toneladas do lixo brasileiro são de produtos
            têxteis, ou seja, sobras e descartes de tecido.
          </p>
          <p>* piaui.folha.uol.com.br </p>
          <button
            onClick={() => {
              navigate("/signup")
            }}
          >
            Faça Parte!
          </button>
        </div>
      </FirstSection>
      <SecondSection>
        <div className="title-subtitle">
          <h2>Tudo começa com a conscientização</h2>
          <p>
            Através de uma curadoria bem elaborada, desenvolvemos uma rede de
            parceiros, que criam este ecossistema de mudança, pautado nos três
            R's da sustentabilidade.
          </p>
        </div>
        <div className="rs">
            <div></div>
            <div></div>
            <div></div>
        </div>
      </SecondSection>
    </HomeContainer>
  )
}
