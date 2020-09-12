import React from 'react'

export interface IFButtonProps {
  text: string
}

const IFButton = ({ text }: IFButtonProps) => {
  return <button>{text}</button>
}

export default IFButton
