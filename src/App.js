import RecordCard from './components/RecordCard'
import React, { useState, useEffect, useRef } from "react"
import SearchCard from './components/SearchCard';

function App() {
  const [records, setRecords] = useState([]);
  const [page_number, setPageNumber] = useState(1);
  const [is_next_page, setIsNextPage] = useState(true);
  const [state_code, setStateCode] = useState('');
  const show_more_button = useRef();
  const new_state_code = useRef();
  const first_name = useRef();
  const last_name = useRef();
  const search_card_refs = useRef({new_state_code, first_name, last_name});

  function getData(state_code, f_name, l_name, page_number) {
    fetch(`https://jailbase-jailbase.p.rapidapi.com/search/?last_name=${l_name}&first_name=${f_name}&source_id=${state_code}&page=${page_number}`, {
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

  function getPrisonerData() {
    const code = new_state_code.current.value;
    const f_name = first_name.current.value;
    const l_name = last_name.current.value;

    let records = document.querySelectorAll('.record_card')
    records.forEach(record => record.remove())

    getData(code, f_name, l_name, 1)
  }

  useEffect(() => {
    getData(state_code, '', '', page_number)
  }, [])

  return (
    <div className="App">
      <SearchCard ref={search_card_refs} getPrisonerData={getPrisonerData} />

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
