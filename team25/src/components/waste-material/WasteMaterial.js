import React from 'react'
import { MaterialContainer } from './styledWasteMaterial'

export default function WasteMaterial(props) {
  return (
    <MaterialContainer>{props.name}</MaterialContainer>
  )
}
