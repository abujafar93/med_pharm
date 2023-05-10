import React from "react";
import ReactPaginate from "react-paginate";
import "./paginate.css"


const Paginate = ({ handlePageClick, pageCount }) => {
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        breakClassName="break-class"
        nextLabel="Next"
        pageClassName="pagination-design"
        onPageChange={handlePageClick}
        containerClassName="pagination"
        previousLinkClassName="pagination__link"
        nextLinkClassName="pagination__link"
        activeClassName="pagination__link--active"
        activeLinkClassName="active-link-text"
        pageCount={pageCount}
        disabledClassName="pagination__link--disabled"
        previousLabel="Previous"
        previousClassName="previous-button"
        nextClassName="next-button"
        pageLinkClassName="selected-page"
      />
    </div>
  );
};

export default Paginate;