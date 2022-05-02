import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { CompaniesContainer, PageContainer } from "./styledSearchResults"
import Header from "../../components/header/Header"
import BaseButton from "../../components/base-button/BaseButton"
import CompanyCard from "../../components/company-card/CompanyCard"

export default function SearchResults() {
  const params = useParams()
  const material = params.material
  const need = params.need
  // const [data, setData] = useState()

  const data = [{
    id: "50868835-0ae9-426f-a286-553eabd3e531",
    name: "Provi Wear",
    image: "https://diariodocomercio.com.br/wp-content/uploads/2020/06/industriatextil-capa-0406.jpg",
    materials: ["Algodão", "Tencel"],
    city: "São Paulo",
    state: "SP"
  },
  {
    id: "50868835-0ae9-426f-a286-553eabd3e531",
    name: "Provi Wear",
    image: "https://diariodocomercio.com.br/wp-content/uploads/2020/06/industriatextil-capa-0406.jpg",
    materials: ["Algodão", "Tencel"],
    city: "São Paulo",
    state: "SP"
  },
  {
    id: "50868835-0ae9-426f-a286-553eabd3e531",
    name: "Provi Wear",
    image: "https://diariodocomercio.com.br/wp-content/uploads/2020/06/industriatextil-capa-0406.jpg",
    materials: ["Algodão", "Tencel"],
    city: "São Paulo",
    state: "SP"
  }]

  const navigate = useNavigate()

  return (
    <>
      <Header />
      <PageContainer>
        <h1>Resultados da sua busca</h1>
        <p>{need} - {material}</p>
        <p>Essas empresas podem te ajudar</p>
        <CompaniesContainer className="companies">
          {data?.map((company) => {
            return (
              <CompanyCard
              id={company.id}
                name={company.name}
                image={company.image}
                materials={company.materials}
                city={company.city}
                state={company.state}
              />
            )
          })}
        </CompaniesContainer>
        <BaseButton onClick={() => navigate(`/search`)} color="main">
          Retornar à busca
        </BaseButton>
      </PageContainer>
    </>
  )
}
