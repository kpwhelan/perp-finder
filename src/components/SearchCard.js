import React from 'react'

function SearchCard(props, ref) {
  const {new_state_code, first_name, last_name} = ref.current;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container justify-content-start">
          <a className="navbar-brand" href="#">Perp-Finder</a>
          <input type="text" ref={first_name} placeholder='First Name'></input>
          <input type="text" ref={last_name} placeholder='Last Name'></input>
          <input type="text" ref={new_state_code} placeholder='State Code' required></input>
          <button onClick={() => props.getPrisonerData()}>Find</button>
        </div>
      </nav>
    </div>
  )
}

export default React.forwardRef(SearchCard)