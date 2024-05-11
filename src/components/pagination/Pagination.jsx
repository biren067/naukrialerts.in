"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '@/styles/paginations.scss'

function Pagination({pageInfo}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [numberOfPages,setNumberOfPages] = useState();
  const [pageNumber,setPageNumber] = useState();
  const pageSize = process.env.PAGESIZE
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo(0, 0);
  };
  const handleClick=()=>{
    const totalCount = 10
    console.log("*************calcuation",parseInt(pageSize/totalCount));
  }

  useEffect(()=>{
    console.log("pageInfo",pageInfo)
    if (pageInfo)
    {
      setNumberOfPages(numberOfPages)
      setPageNumber(pageNumber)
    }
  },[pageInfo])
  return (
    <div className='paginations'>
      
        {JSON.stringify(pageInfo)}
        <button>pageNumber{pageInfo.pageNumber}</button>
        <button>noOfPages{numberOfPages}</button>
        <button 
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={false}
        >
          Previous-{pageInfo && pageInfo.isFirstPage?"true":"false"}
        </button>

        { (pageInfo && pageInfo.pageNumber && pageInfo.numberOfPages && (pageInfo.pageNumber - 3) >= numberOfPages) ? (
            <span>
              <button>1</button>
              <button>...</button>
              <button>{pageInfo.pageNumber - 2}</button>
              <button>{pageInfo.pageNumber - 1}</button>
              <button>{pageInfo.pageNumber}</button>
            </span>
          ) : (
            (pageInfo && (pageInfo.pageNumber + 3) >= numberOfPages ? (
              <span>
                <button>{pageInfo.pageNumber + 1}</button>
                <button>{pageInfo.pageNumber + 2}</button>
                <button>...</button>
                <button>{pageInfo.pageNumber}</button>
              </span>
            ) : (
              <span>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
              </span>
            )
          ))
        }

        {/* { (pageInfo.pageNumber-3) > 0 ?(<span>
          <span>
            <button>1</button>
            <button>...</button>
            <button>{pageInfo.pageNumber-2}</button>
            <button>{pageInfo.pageNumber-1}</button>
            <button>{pageInfo.pageNumber}</button>
        </span>):(
          {( (pageInfo.pageNumber+3) >= pageInfo.numberOfPages)?(<span>
            <button>{pageInfo.pageNumber+1}</button>
            <button>{pageInfo.pageNumber+2}</button>
            <button>...</button>
            <button>{pageInfo.pageNumber}</button>
          </span>):(<span>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            </span>)}

        )} */}


        {/* {Array.from({ length: pageInfo?.numberOfPages }, (_, index) => (
        <div key={index}>
          {(pageInfo.numberOfPages <= 5) ?
          (<button>
            {index+1}
          </button>):(
            (pageInfo.pageNumber+3)>=pageInfo.numberOfPages?(
              <span><button>{index+1}</button><button>...</button><button>{index+1}</button></span>
            ):()
          )}
          </div>
      ))} */}
        {/* {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            // className={pageNumber === currentPage ? `${styles.mainPage__button_number}` : ''}
            
            // className={` ${styles.mainPage__button_number} ${pageNumber=== currentPage ? 'bg-blue-500 border-blue-100' : 'text-blue'}`}
          >
            {pageNumber}
          </button>
        ))} */}
        <button 
          onClick={() => handlePageChange(currentPage + 1)}
          // disabled={endIndex >= data.length}
        >
          Next-{pageInfo && pageInfo.isLastPage?"true":"false"}
        </button>
      </div>
    
  );
}

export default Pagination;
