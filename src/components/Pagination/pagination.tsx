import React from 'react'
import './pagination.css'
export default function pagination({ nPages, currentPage, setCurrentPage }:{nPages:number,currentPage:number, setCurrentPage:Function}) {
    const pageNumbers: number[]=[]
    for (let i = 1; i <= nPages; i++) {
        pageNumbers.push(i);
    }
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
