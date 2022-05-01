import React from "react"
import { useNavigate } from "react-router-dom"
import BaseButton from "../../components/base-button/BaseButton"
import Header from "../../components/header/Header"
import {
  FirstSection,
  HomeContainer,
  MockSections,
  SecondSection,
  ThirdSection,
} from "./styledHome"
import reduzir from "../../assets/home/Go Green Recycle Plastic.png"
import reutilizar from "../../assets/home/Go Green Recycle Bubble.png"
import reciclar from "../../assets/home/Go Green Green Hanger Bag.png"
import section4 from "../../assets/home/section4.png"
import sec31 from "../../assets/home/section3/Group 2054.png"
import sec32 from "../../assets/home/section3/Group 2056.png"
import sec33 from "../../assets/home/section3/Group 2055.png"
import contactUS from "../../assets/home/Contact Us.png"
import footer from "../../assets/home/Footer.png"

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
          <p id="source">fonte: piaui.folha.uol.com.br </p>
          <BaseButton
            color="mainYellow"
            textColor="gray3"
            onClick={() => {
              navigate("/login")
            }}
          >
            Faça Parte!
          </BaseButton>
        </div>
      </FirstSection>
      <SecondSection>
        <div className="title-subtitle">
          <h2>Tudo começa com a conscientização</h2>
          <p>
            Através de uma curadoria bem elaborada, desenvolvemos uma rede de
            parceiros, que criam este ecossistema de mudança, pautado nos três
            R's da sustentabilidade .
          </p>
        </div>
        <div className="rs">
          <img src={reduzir} alt="reduzir"></img>
          <img src={reutilizar} alt="reutilizar"></img>
          <img src={reciclar} alt="reciclar"></img>
        </div>
      </SecondSection>
      <ThirdSection>
        <h2>Entenda o processo</h2>
        <p>
          Conectamos empresas interessadas em descartar corretamente ou reciclar
          resíduos têxteis.
        </p>
        <div className="process">
          <img src={sec31} alt="reduzir"></img>
          <img src={sec32} alt="reutilizar"></img>
          <img src={sec33} alt="reciclar"></img>
        </div>
      </ThirdSection>
      <MockSections id="search"
        onClick={() => navigate("/login")}
        src={section4}
        alt="section4"
      />
      <MockSections id="contact"
        onClick={() => navigate("/login")}
        src={contactUS}
        alt="section4"
      />
      <MockSections id="about"
        onClick={() => navigate("/login")}
        src={footer}
        alt="section4"
      />
    </HomeContainer>
  )
}
