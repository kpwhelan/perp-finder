import React from 'react'

function SearchCard(props, ref) {
  return (
    <div>
      <input ref={ref} placeholder='State Code'></input>
      <button onClick={() => props.getNewStateCode()}>Find</button>
    </div>
  )
}

export default React.forwardRef(SearchCard)