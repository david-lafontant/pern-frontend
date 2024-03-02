import React, { Fragment } from 'react'

const Button = ({ type, text, clickHandle }) => {
  return (
    <Fragment>
      <button type={type} onClick={clickHandle}>{text}</button>
    </Fragment>
  )
}

export default Button;
