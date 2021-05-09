import { useState } from 'react'

export const useFrom = (initialState = {}) => {
  const [values, setValues] = useState(initialState)

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    })
  }

  const reset = () => {
    setValues({})
  }

  return [values, handleInputChange, reset]
}
