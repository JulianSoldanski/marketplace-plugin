import React from 'react';
import './pagination.css';

/**
 * Pagination to switch between pages of services 
 * @param {*} itemsPerPage Amount of items should be shown on one page 
 * @param {*} totalItems All items 
 * @param {*} currentPage Current Page the user clicked
 * @param {*} handlePageChange Function to be used, when clicked on zurück or weiter
 * @returns UI Element
 */

const Pagination = ({itemsPerPage, totalItems, currentPage, handlePageChange}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='pagination_nav'>
      <ul className='pagination'>
        <li>
          <button
            className='pagination_button'
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
             <span class="dashicons dashicons-arrow-left-alt2"></span> zurück
          </button>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
            <a onClick={() => handlePageChange(number)} className='page-link'>
              {number}
            </a>
          </li>
        ))}
        <li>
          <button
            className='pagination_button'
            disabled={currentPage === pageNumbers.length}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            weiter <span class="dashicons dashicons-arrow-right-alt2"></span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
