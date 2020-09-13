import React from 'react'

export interface IFButtonProps {
  text: string
}

const IFButton = ({ text }: IFButtonProps) => {
  console.log('IFButton component called')
  return <button>{text}</button>
}

export default IFButton
