import React from 'react';

const Input = (props) => {
  const {
    label = '',
    isRequired = false
  } = props
  return <div>
    <label>{props.label}{props.isRequired ? '必填' : ''}</label>
    <input {...props}/>
  </div>
}

export default Input
