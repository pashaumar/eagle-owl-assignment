import React, { useState, useEffect } from "react";
import styles from "./TopFluctuationRecipes.module.css";
import spinner from "../../assets/spinner.gif";
function TopFluctuationRecipes() {
  const [results, setResults] = useState(null);

  useEffect(() => {
    fetch(
      "https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/fluctuation-group/?order=top"
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
        <div className={styles.fluctuationContainer}>
          <div className={styles.fluctuation}>{result.fluctuation} %</div>
          {index === 0 ? (
            <i className="fas fa-arrow-up" style={{ color: "green" }}></i>
          ) : (
            <i className="fas fa-arrow-down" style={{ color: "red" }}></i>
          )}
        </div>
      </div>
    ));
  };
  return (
    <div className={styles.topFluctuationRecipesContainer}>
      <div className={styles.head}>Top Fluctuating Recipes</div>
      <div className={styles.resultsContainer}>{showRecipesResultsName()}</div>
    </div>
  );
}

export default TopFluctuationRecipes;
