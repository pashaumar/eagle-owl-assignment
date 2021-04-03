import React, { useState, useEffect } from "react";
import styles from "./HighMarginRecipes.module.css";
import ProgressBar from "../progressBar/ProgressBar";
import spinner from "../../assets/spinner.gif";
function HighMarginRecipes() {
  const [results, setResults] = useState(null);
  useEffect(() => {
    fetch(
      "https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/margin-group/?order=top"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setResults(data.results);
        }
      });
  }, []);

  const showRecipesResultsName = () => {
    if (results === null) {
      return (
        <div className={styles.spinner}>
          <img src={spinner} alt="spinner" />
        </div>
      );
    }
    return results.map((result, index) => (
      <div className={styles.resultContainer} key={index}>
        <div className={styles.name}>{result.name}</div>
        <ProgressBar color={"green"} percent={result.margin} />
      </div>
    ));
  };

  return (
    <div className={styles.highMarginRecipesContainer}>
      <div className={styles.head}>High Margin Recipes</div>
      <div className={styles.resultsContainer}>{showRecipesResultsName()}</div>
    </div>
  );
}

export default HighMarginRecipes;
