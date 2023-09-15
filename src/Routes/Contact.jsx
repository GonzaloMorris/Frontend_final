import React from 'react'
import Form from '../Components/Form'
import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'

const Contact = () => {
  const { Theme } = useContext(ContextGlobal)
  return (
    <div className='contact' style={{background:Theme.backgroundHome, color:Theme.color}}>
      <h2>¿Quiere saber mas?</h2>
      <p>Deje su consulta y nos pondremos en contacto a la brevedad</p>
      <Form/>
    </div>
  )
}

export default Contact