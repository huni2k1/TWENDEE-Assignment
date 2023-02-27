import React from 'react'
import './pagination.css'
export default function pagination({ nPages, currentPage, setCurrentPage }:{nPages:number,currentPage:number, setCurrentPage:Function}) {
    const pageNumbers = [1,2,3,4,5,6,7,8,9,10]

    const handlePageClick = (pgNumber: any) => {
        setCurrentPage(pgNumber)
    };
    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber}
                        className={`page-item ${currentPage == pgNumber ? 'active' : ''} `} 
                        onClick={()=>handlePageClick(pgNumber)}
                        >
                        {pgNumber}
                    </li>
                ))}
            </ul>
        </nav>
    )
}
