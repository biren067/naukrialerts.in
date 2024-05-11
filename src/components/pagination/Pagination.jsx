import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const pageSize = 10; // Change this according to your API

  useEffect(() => {
    fetchData();
  }, [currentPage]); // Fetch data when page number changes

  const fetchData = async () => {
    try {
      // const url = `http://localhost:8000/api/getstateandcategorypaginations?state=${stateValue}&categories=${categoryValue}&pagesize=${pagesize}&pagenumber=${pagenumber}`
      const url = `http://localhost:8000/api/getstateandcategorypaginations?pagesize=3&pagenumber=${currentPage}`
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
      <button onClick={handleNextPage}>Next</button>
    </div>
  );
}

export default Pagination;
