import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Loading from "../../assets/loading/Loading"
import BaseButton from "../../components/base-button/BaseButton"
import Header from "../../components/header/Header"
import { useForm } from "../../hooks/useForm"
import base_url from "../../services/base_url"
import { PageContainer } from "./styledAddWaste"

export default function AddWaste() {
  const { form, handleChange, clearForm } = useForm({
    name: "waste",
    type: "Algodão",
    quantity: "",
    location: "",
    image: "",
  })

  const navigate = useNavigate()

  const [button, setButton] = useState("Salvar e adicionar outro")

  const handleSubmit = (e) => {
    e.preventDefault()

    setButton(<Loading />)

    const body = { ...form, companyId: localStorage.getItem("@userToken") }

    axios
      .post(base_url + "/waste", body)
      .then((res) => {
        setButton("Enviado")
        clearForm()
        setTimeout(() => setButton("Salvar e adicionar outro"), 1000)})
      .catch((err) => alert(err.message))
  }


  const handleSubmitLeave = (e) => {
    e.preventDefault()

    setButton(<Loading />)

    console.log("rodei")

    const body = { ...form, companyId: localStorage.getItem("@userToken") }

    axios
      .post(base_url + "/waste", body)
      .then((res) => {
        setButton("Enviado")
        setTimeout(() => navigate('/dashboard'), 1000)})
      .catch((err) => alert(err.message))
  }

  return (
    <>
      <Header />
      <PageContainer>
        <form
          type="submit"
          onSubmit={(e) => {
            handleSubmit(e)
          }}
        >
          <label>Tipo de Material</label>
          <select value={form.type} name="type" onChange={handleChange}>
            <option value={"Algodão"}>Algodão</option>
            <option value={"Elastano"}>Elastano</option>
            <option value={"Seda"}>Seda</option>
            <option value={"Lã"}>Lã</option>
            <option value={"Tencel"}>Tencel</option>
            <option value={"Linho"}>Linho</option>
            <option value={"Poliéster"}>Poliéster</option>
            <option value={"Viscose"}>Viscose</option>
          </select>
          <label>Quantidade (em kg)</label>
          <input
            value={form.quantity}
            name="quantity"
            onChange={handleChange}
            placeholder="Quantidade"
          />
          <label>Ponto de coleta</label>
          <input
            value={form.location}
            name="location"
            onChange={handleChange}
            placeholder="Ponto de coleta"
          />
          <label>Foto do material (url)</label>
          <input
            value={form.image}
            name="image"
            onChange={handleChange}
            placeholder="url da imagem"
          />
          <BaseButton type="submit">{button}</BaseButton>
          <a
            onClick={(e) => {
              handleSubmitLeave(e)
            }}
          >
            Salvar e fechar
          </a>
        </form>
      </PageContainer>
    </>
  )
}
