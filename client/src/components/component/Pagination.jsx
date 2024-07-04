import React from "react";

export default function Pagination({ cardsPerPage, totalCards, paginate, activePage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination d-flex justify-content-center align-items-center mb-0">
                <li className={`page-item list-group-item bg-transparent border-none${activePage === 1 ? 'disabled' : ''}`}>
                    <a className="page-link " href="#" aria-label="Previous Page" onClick={() => activePage > 1 && paginate(activePage - 1)}>
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item list-group-item m-0 bg-transparent border-none ${number === activePage ? 'active' : ''}`}>
                        <a className="page-link bg-transparent border-none" href="#" onClick={() => paginate(number)}>{number}</a>
                    </li>
                ))}
                <li className={`page-item list-group-item bg-transparent border-none ${activePage === pageNumbers.length ? 'disabled' : ''}`}>
                    <a className="page-link bg-transparent border-none" href="#" aria-label="Next Page" onClick={() => activePage < pageNumbers.length && paginate(activePage + 1)}>
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}
