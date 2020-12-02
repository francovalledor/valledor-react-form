import React from 'react'

/**
 * ## Create a simple form
 *
 * @callback onChange
 * @callback onSubmit
 * @callback onBlur
 * @param {array} fields - Array containing form's fields (<input>)
 * @param {string} fields[].name - <input>'s name
 * @param {string} fields[].type - <input>'s type
 * @param {string} [ fields[].placeholder ] - optional <input>'s placeholder
 * @param {string} [ fields[].label ] - optional <input>'s label
 * @param {string} [ fields[].note ] - optional <input>'s note
 *
 * @param {string} [title] - optional form's title
 * @param {function} [onChange] - optional function for fields change handling
 * @param {function} [onSubmit] - optional function for form submit handling
 * @param {function} [onBlur] - optional function for focus out handling
 * @version 1.0.0
 * @author [Franco Valledor](https://github.com/francovalledor)
 */
export function SimpleForm(props) {
  // FUNCTIONS
  // Validations
  function checkParams() {
    let itsOK = true

    if (!props.fields || !props.fields.map) {
      itsOK = false
    }

    return itsOK
  }

  // Event Handlers
  function handleChange(e) {
    if (props.onChange) {
      props.onChange(e)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (props.onSubmit) {
      props.onSubmit(e)
    }
  }

  function handleFocusOut(e) {
    if (props.onBlur) {
      props.onBlur(e)
    }
  }

  function renderTitle() {
    if (props.title) {
      return <h3>{props.title}</h3>
    } else {
      return ''
    }
  }

  function renderNote(field) {
    if (field.note) {
      return <small className='text-muted'>{field.note}</small>
    } else {
      return ''
    }
  }

  function renderLabel(field) {
    if (field.label) {
      return (
        <label className='mt-2' htmlFor={field.name}>
          {field.label}
        </label>
      )
    } else {
      return ''
    }
  }

  function renderValidMessage(field) {
    if (field.validMessage) {
      return <div className='valid-feedback'>{field.validMessage}</div>
    } else {
      return ''
    }
  }

  function renderInvalidMessage(field) {
    if (field.invalidMessage) {
      return <div className='invalid-feedback'>{field.invalidMessage}</div>
    } else {
      return ''
    }
  }

  function renderFields(fields) {
    let index = 1
    return props.fields.map((field) => {
      let classes = 'form-control'
      if (field.isValid === true) {
        classes += ' is-valid'
      } else if (field.isValid === false) {
        classes += ' is-invalid'
      }

      if (field.type.toLowerCase() === 'submit') {
        return (
          <div key={field.name} className='form-group'>
            {renderLabel(field)}
            <input
              type={field.type}
              name={field.name}
              className={classes}
              placeholder={field.placeholder}
              autoFocus={index === 1}
              tabIndex={index++}
              value={field.value}
              required={field.required || false}
            />
            {renderNote(field)}
          </div>
        )
      } else {
        return (
          <div key={field.name} className='form-group'>
            {renderLabel(field)}
            <input
              type={field.type}
              name={field.name}
              className={classes}
              placeholder={field.placeholder}
              autoFocus={index === 1}
              tabIndex={index++}
              defaultValue={field.value}
              required={field.required || false}
            />
            {renderNote(field)}
            {renderValidMessage(field)}
            {renderInvalidMessage(field)}
          </div>
        )
      }
    })
  }

  /**
   *    BODY
   */
  if (checkParams()) {
    return (
      <form
        onSubmit={handleSubmit}
        onChange={handleChange}
        onBlur={handleFocusOut}
      >
        {renderTitle()}
        {renderFields(props.fields)}
      </form>
    )
  } else {
    console.error('CreateForm: Missing params')
    return ''
  }
}

export default SimpleForm
