import React from "react"
import WasteMaterial from "../waste-material/WasteMaterial"
import { CardContainer } from "./styledCompanyCard"

export default function CompanyCard(props) {
  return (
    <CardContainer image={props.image}>
      <div className="info">
        <h1>{props.name}</h1>
        <div className="materials">
          {props.materials?.map((material) => {
            return <WasteMaterial name={material} />
          })}
        </div>
        <h2>{`${props.city} - ${props.state}`}</h2>
      </div>
    </CardContainer>
  )
}
