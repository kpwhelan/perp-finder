import React from 'react'

function Input({ input_name }) {
  return (
      <div>
        <label for="first_name">{input_name}</label>
        <input type="text" id="first_name" name="first_name"></input>
      </div>
  )
}

export default Input