import React from 'react'

function RecordCard(props) {
  return (
    <div className='d-inline-flex flex-wrap bd-highlight mb-3 w-100 record_card'>
      <div className='card m-3 p-3 w-40'>
        <div className='card-body'>
          <p className='card-title'>Name: {props.data.name}</p>
          <p className='card-text'>Booking Date: {props.data.book_date}</p>
          <p className='card-text'>Charges: {props.data.charges.map(charge => <p>-{charge}</p>)}</p>
          <p className='card-text'>Mugshot: <a href={props.data.mugshot} target="_blank"><img src={props.data.mugshot} alt="mugshot" /></a></p>
        </div>
      </div>
    </div>
  )
}

export default RecordCard