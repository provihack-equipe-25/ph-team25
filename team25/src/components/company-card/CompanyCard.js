import React from "react"
import { useNavigate } from "react-router-dom"
import WasteMaterial from "../waste-material/WasteMaterial"
import { CardContainer } from "./styledCompanyCard"

export default function CompanyCard(props) {
  const navigate = useNavigate()
  return (
    <CardContainer onClick={() => navigate(`/company/${props.id}`)} image={props.image}>
      <div className="info">
        <h4>{props.name}</h4>
        <div className="materials">
          {props.materials?.map((material) => {
            return <WasteMaterial name={material} />
          })}
        </div>
        <h3>{`${props.city} - ${props.state}`}</h3>
      </div>
    </CardContainer>
  )
}
