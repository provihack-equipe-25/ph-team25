import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import BaseButton from "../../components/base-button/BaseButton"
import Header from "../../components/header/Header"
import { PageContainer, SelectButton } from "./styledSearchPage"

export default function SearchPage() {
  const [need, setNeed] = useState("descartar")
  const [material, setMaterial] = useState("algodao")

  const navigate = useNavigate()

  return (
    <>
      <Header />
      <PageContainer>
        <h1>Hora de Buscar</h1>
        <p>Encontre a empresa parceira que mais se adequa a você</p>
        <h2>O que você deseja?</h2>
        <div className="choice">
          <SelectButton
            selected={need === "descartar" ? true : false}
            onClick={() => setNeed("descartar")}
          >
            descartar
          </SelectButton>
          <SelectButton
            selected={need === "recolher" ? true : false}
            onClick={() => setNeed("recolher")}
          >
            recolher
          </SelectButton>
        </div>

        <h2>Escolha o material</h2>

        <div className="material">
          <SelectButton
            selected={material === "algodao" ? true : false}
            onClick={() => setMaterial("algodao")}
          >
            Algodão
          </SelectButton>
          <SelectButton
            selected={material === "elastano" ? true : false}
            onClick={() => setMaterial("elastano")}
          >
            Elastano
          </SelectButton>
          <SelectButton
            selected={material === "seda" ? true : false}
            onClick={() => setMaterial("seda")}
          >
            Seda
          </SelectButton>
          <SelectButton
            selected={material === "tencel" ? true : false}
            onClick={() => setMaterial("tencel")}
          >
            Tencel
          </SelectButton>
          <SelectButton
            selected={material === "linho" ? true : false}
            onClick={() => setMaterial("linho")}
          >
            Linho
          </SelectButton>
          <SelectButton
            selected={material === "poliester" ? true : false}
            onClick={() => setMaterial("poliester")}
          >
            Poliéster
          </SelectButton>
          <SelectButton
            selected={material === "viscose" ? true : false}
            onClick={() => setMaterial("viscose")}
          >
            Viscose
          </SelectButton>
        </div>
        <BaseButton onClick={() => navigate(`/search/${need}/${material}`)} textColor="gray3" color="mainYellow">Pesquisar agora</BaseButton>
      </PageContainer>
    </>
  )
}
