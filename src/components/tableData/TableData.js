import React from "react";
import styles from "./TableData.module.css";
function TableData({ result, selectAllRecipes }) {
  return (
    <tr className={styles.tableRow}>
      <td>
        <input type="checkbox" checked={selectAllRecipes} />
      </td>

      <td className={styles.name}>{result.name}</td>
      <td className={styles.lastUpdated}>{result.last_updated.date}</td>
      <td>{result.cogs}%</td>
      <td>{Math.ceil(result.cost_price)}</td>
      <td>{result.sale_price}</td>
      <td>{Math.ceil(result.gross_margin)}</td>
      <td>dummy</td>
    </tr>
  );
}

export default TableData;
