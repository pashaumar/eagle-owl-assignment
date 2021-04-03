import React from "react";
import styles from "./Pagination.module.css";
function Pagination({ page, currentPage, setCurrentPage }) {
  return (
    <button
      onClick={() => setCurrentPage(page)}
      className={currentPage === page ? styles.activePage : styles.inactivePage}
    >
      {page}
    </button>
  );
}

export default Pagination;
