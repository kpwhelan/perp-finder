import React from 'react'

function SearchCard(props, ref) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container justify-content-start">
          <a className="navbar-brand" href="#">Perp-Finder</a>
          <input type="text" placeholder='First Name'></input>
          <input type="text" placeholder='Last Name'></input>
          <input type="text" ref={ref} placeholder='State Code'></input>
          <button onClick={() => props.getNewStateCode()}>Find</button>
        </div>
      </nav>
    </div>
  )
}

export default React.forwardRef(SearchCard)