import { useState } from 'react'

export default function useForms(estadoInicial ,  path , headers) {
    const [form, setForm] = useState(estadoInicial)

    const onChange = (e) =>{
        const {value, name} = e.target
        setForm({...form, [name]: value})
    }

    const limparCampos = () =>{
      setForm(estadoInicial)
    }
  return {form, onChange, limparCampos}
}
