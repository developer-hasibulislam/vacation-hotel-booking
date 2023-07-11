/**
 * Title: Pagination.jsx
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 11, July 2023
 */

import React, { useState } from "react";

const Pagination = ({ totalPages, setPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    setPage(pageNumber);
  };

  const renderPage = (pageNumber, isActive = false) => {
    const className = `size-40 flex-center rounded-full cursor-pointer ${
      isActive ? "bg-dark-1 text-white" : ""
    }`;
    return (
      <div key={pageNumber} className="col-auto">
        <div className={className} onClick={() => handlePageClick(pageNumber)}>
          {pageNumber}
        </div>
      </div>
    );
  };

  const renderPages = (totalPages) => {
    const visiblePages = 1; // Number of visible page numbers excluding ellipsis

    const pageNumbers = [];
    let startPage = Math.max(1, currentPage - visiblePages);
    let endPage = Math.min(totalPages, currentPage + visiblePages);

    if (endPage - startPage < visiblePages * 2) {
      if (startPage === 1) {
        endPage = Math.min(startPage + visiblePages * 2, totalPages);
      } else if (endPage === totalPages) {
        startPage = Math.max(endPage - visiblePages * 2, 1);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    const pages = [];

    // Render the first page if it's not already in the list
    if (!pageNumbers.includes(1)) {
      pages.push(renderPage(1, currentPage === 1));
    }

    // Render ellipsis before the first visible page number
    if (startPage > 2) {
      pages.push(
        <div key="ellipsis1" className="col-auto">
          <div className="size-40 flex-center rounded-full">...</div>
        </div>
      );
    }

    // Render the visible page numbers
    pageNumbers.forEach((pageNumber) => {
      pages.push(renderPage(pageNumber, pageNumber === currentPage));
    });

    // Render ellipsis after the last visible page number
    if (endPage < totalPages - 1) {
      pages.push(
        <div key="ellipsis2" className="col-auto">
          <div className="size-40 flex-center rounded-full">...</div>
        </div>
      );
    }

    // Render the last page if it's not already in the list
    if (!pageNumbers.includes(totalPages) && totalPages !== 1) {
      pages.push(renderPage(totalPages, currentPage === totalPages));
    }

    return pages;
  };

  return (
    <div className="border-top-light mt-30 pt-30">
      <div className="row x-gap-10 y-gap-20 justify-center">
        <div className="col-md-auto md:order-3">
          <div className="row x-gap-20 y-gap-20 items-center md:d-none">
            {renderPages(totalPages)}
          </div>

          <div className="row x-gap-10 y-gap-20 justify-center items-center d-none md:d-flex">
            {renderPages(totalPages)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
