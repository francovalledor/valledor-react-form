import React from 'react'

import { SimpleForm } from 'valledor-react-form'
import 'valledor-react-form/dist/index.css'



const App = () => {
  let fields = []

  fields.push({
    name: "username",
    type: "text",
    placeholder: "Username",
    required: true
  });

  fields.push({
    name: "password",
    type: "password",
    placeholder: "Password",
    note: "must include letters in mixed case and numbers"
  });

  fields.push({
    label: "Date of birth",
    name: "date",
    type: "date",
    value: "2020-12-02",
    isValid: true,
    validMessage: "Looks good",
    invalidMessage: "Doesn't looks good"
  });

  fields.push({
    name: "email",
    type: "email",
    placeholder: "email@email.com",
    value: "francovalledor@gmail.com",
    required: true
  });
  
  fields.push({
    name: "submit",
    type: "submit",
    value: "Sign In",
    required: true
  });

  function onSubmit(e) {
    e.preventDefault();
    console.log("submit");
  }

  function onChange(e) {
    e.preventDefault();
    console.log("change");
  }


  return <SimpleForm
  onChange={onChange}
  onSubmit={onSubmit}
  title="Sign Up"
  fields={fields}
/>
}

export default App
