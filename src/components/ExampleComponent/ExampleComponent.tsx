import React from 'react'
import styles from './ExampleComponent.module.css'

export interface Props {
  text: string
}

const ExampleComponent = ({ text }: Props) => {
  console.log('Example component called')
  return <div className={styles.test}>Example Component: {text}</div>
}

export default ExampleComponent
