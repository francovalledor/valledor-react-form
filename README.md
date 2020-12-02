# valledor-react-form

> Create react forms made simple

[![NPM](https://img.shields.io/npm/v/valledor-react-form.svg)](https://www.npmjs.com/package/valledor-react-form) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save valledor-react-form
```

## Usage

```jsx
import React, { Component } from 'react'

import SimpleForm from 'valledor-react-form'

function SignInForm(props) {
  fields.push({
    name: "username",
    type: "text",
    placeholder: "Username",
    required: true
  })

  fields.push({
    name: "password",
    type: "password",
    placeholder: "Password",
    note: "must include letters in mixed case and numbers"
  })

    fields.push({
    name: "submit",
    type: "submit",
    value: "Sign In",
    required: true
  })

    function onSubmit(e) {
      formData = new FormData(e.target)
      validate(formData)
      ...

  }

  ///Optional
    function onChange(e) {
      console.log('field: ', e.target.name)
      console.log('value: ', e.target.value)
    }

  return <SimpleForm
              onChange={onChange}   //optional
              onSubmit={onSubmit}   //optional
              title="Sign Up"       //optional
              fields={fields}       //required
          />
}

### It is recommended to use bootstrap. SimpleForm is bootstrap formatted.
```

## License

MIT © [francovalledor](https://github.com/francovalledor)
