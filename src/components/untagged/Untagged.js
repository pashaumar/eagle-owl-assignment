import React, { useState, useEffect } from "react";
import styles from "./Untagged.module.css";
import TableData from "../tableData/TableData";
import spinner from "../../assets/spinner.gif";
import Pagination from "../pagination/Pagination";
function Untagged() {
  const ITEMS_PER_PAGE = 10;
  const [results, setResults] = useState(null);
  const [lastPage, setLastPage] = useState(null);
  const [numberOfRecipes, setNumberOfRecipes] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectAllRecipes, setSelectAllRecipes] = useState(false);
  useEffect(() => {
    fetch(
      `https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/recipes/?page=${currentPage}&is_untagged=true`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setResults(data.results);
          setNumberOfRecipes(data.count);
        }
      });
  }, [currentPage]);
  useEffect(() => {
    setLastPage(Math.ceil(numberOfRecipes / ITEMS_PER_PAGE));
  }, [numberOfRecipes]);
  const showTableData = () => {
    return results.map((result, index) => (
      <TableData
        result={result}
        key={index}
        selectAllRecipes={selectAllRecipes}
      />
    ));
  };
  const showPagination = () => {
    if (results !== null) {
      return new Array(lastPage)
        .fill(1)
        .map((page, index) => (
          <Pagination
            page={page + index}
            key={index}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        ));
    }
  };
  const disableButton = (page) => {
    if (page === currentPage) {
      return {
        opacity: "0.5",
        pointerEvents: "none",
      };
    }
  };

  return (
    <div className={styles.container}>
      {results === null ? (
        <div className={styles.spinner}>
          <img src={spinner} alt="spinner" />
        </div>
      ) : results.length === 0 ? (
        <div className={styles.NoDataFound}>No Data Found</div>
      ) : (
        <table className={styles.table}>
          <tbody>
            <tr>
              <th>
                <input
                  type="checkbox"
                  onChange={() =>
                    setSelectAllRecipes((prevSelect) => !prevSelect)
                  }
                />
              </th>
              <th>NAME</th>
              <th>LAST UPDATED</th>
              <th>COGS%</th>
              <th>{`COST PRICE()`}</th>
              <th>SALE PRICE</th>
              <th>GROSS MARGIN</th>
              <th>TAGS/ACTIONS</th>
            </tr>
            {showTableData()}
          </tbody>
        </table>
      )}
      {numberOfRecipes > 10 && (
        <div className={styles.pagination}>
          <button
            onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
            style={disableButton(1)}
          >
            Prev
          </button>
          {showPagination()}
          <button
            onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
            style={disableButton(lastPage)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Untagged;
