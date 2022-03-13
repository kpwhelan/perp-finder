import RecordCard from './components/RecordCard'
import React, { useState, useEffect, useRef } from "react"

function App() {
  const [records, setRecords] = useState([]);
  const [page_number, setPageNumber] = useState(1);
  const [is_next_page, setIsNextPage] = useState(true);
  const [state_code, setStateCode] = useState('');
  const show_more_button = useRef();
  const new_state_code = useRef();

  function getData(state_code, page_number) {
    fetch(`https://jailbase-jailbase.p.rapidapi.com/search/?last_name=davis&source_id=${state_code}&page=${page_number}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "jailbase-jailbase.p.rapidapi.com",
        "x-rapidapi-key": "4e6d45765emsh79f4bbd6324f589p103640jsne524ee9e67d4"
      }
    })
    .then(response => response.json())
    .then(data => {
        setIsNextPage(data.next_page !== 0);
        setPageNumber(page_number += 1)
        setRecords([...records, ...data.records])

        if (!is_next_page) {
          show_more_button.current.disabled = true
        }
    })
  }

  function showMore() {
    getData(state_code, page_number)
  }

  function getNewStateCode() {
    const code = new_state_code.current.value
    new_state_code.current.value = null;
    let records = document.querySelectorAll('.record_card')
    records.forEach(record => record.remove())

    // setRecords([])
    getData(code, 1)
    // getData(code, 1)
  }

  useEffect(() => {
    getData(state_code, page_number)
  }, [])

  return (
    <div className="App">
      <input ref={new_state_code} placeholder='State Code'></input>
      <button onClick={getNewStateCode}>Find</button>
      {
        records.map(record => {
          return <RecordCard data={record} />
        })
      }

      <button ref={show_more_button} onClick={showMore}>Show More</button>
    </div>
  );
}

export default App;
