import React from "react";
import styles from "./RecipesContainer.module.css";
import HighMarginRecipes from "../highMarginRecipes/HighMarginRecipes";
import LowMarginRecipes from "../lowMarginRecipes/LowMarginRecipes";
import TopFluctuatingRecipes from "../topFluctuatingRecipes/TopFluctuationRecipes";

function RecipesContainer() {
  return (
    <div className={styles.recipesContainer}>
      <HighMarginRecipes />
      <LowMarginRecipes />
      <TopFluctuatingRecipes />
    </div>
  );
}

export default RecipesContainer;
