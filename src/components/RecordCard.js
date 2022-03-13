import React from 'react'

function RecordCard(props) {
  return (
    <div className="record_card">
        <ul>
            <li>Name: {props.data.name}</li>
            <li>Booking Date: {props.data.book_date}</li>
            <li>Charges:
              <ul>
                {props.data.charges.map(charge => <li>{charge}</li>)}
              </ul></li>
            <li>County: {props.data.county_state}</li>
            <li>Mugshot: <a href={props.data.mugshot} target="_blank"><img src={props.data.mugshot} alt="mugshot" /></a></li>
        </ul>
    </div>
  )
}

export default RecordCard