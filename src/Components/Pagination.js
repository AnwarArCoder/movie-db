import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ getPage, pageCountNum }) => {
  const handlePageClick = (data) => {
    getPage(data.selected + 1);
  };

  return (
    <ReactPaginate
      breakLabel="......."
      nextLabel="التالي >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      containerClassName="react-paginate-btn"
      pageCount={pageCountNum}
      previousLabel="< السابق"
      activeClassName="active"
    />
  );
};

export default Pagination;
