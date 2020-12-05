import React from 'react'
import { SimpleForm } from "valledor-react-form";

const App = () => {
  let fields = []

  fields.push({
    name: 'username',
    type: 'text',
    placeholder: 'Username',
    required: true
  })

  fields.push({
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    note: 'must include letters in mixed case and numbers'
  })

  fields.push({
    label: 'Date of birth',
    name: 'date',
    type: 'date',
    value: '2020-12-02',
    isValid: true,
    validMessage: 'Looks good',
    invalidMessage: "Doesn't looks good"
  })

  fields.push({
    name: 'email',
    type: 'email',
    placeholder: 'email@email.com',
    value: 'francovalledor@gmail.com',
    required: true
  })

  fields.push({
    name: 'gender',
    type: 'select',
    label: 'Gender',
    options: [
      {value: "M", text: "M"},
      {value: "F", text: "F"},
      {value: "NB", text: "NB"}
    ]
  })

  fields.push({
    name: 'submit',
    type: 'submit',
    value: 'Sign In',
    required: true
  })

  function onSubmit(e) {
    e.preventDefault()
    console.log('submit')
  }

  function onChange(e) {
    e.preventDefault()
    console.log('change')
  }

  return (
    <div className='container p-2 mt-4'>
      <SimpleForm fields={fields} />
    </div>
  )
}

export default App
