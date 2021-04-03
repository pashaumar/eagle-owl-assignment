import React from "react";
import styles from "./RecipesTypeButton.module.css";
import { Link } from "react-router-dom";
function RecipesTypeButton({ data, activeButton, setActiveButton, index }) {
  return (
    <>
      {index === 0 ? (
        <Link to="/">
          <button onClick={() => setActiveButton(data)}>{data}</button>
        </Link>
      ) : (
        <Link to={`/${data}`}>
          <button onClick={() => setActiveButton(data)}>{data}</button>
        </Link>
      )}
    </>
  );
}

export default RecipesTypeButton;
