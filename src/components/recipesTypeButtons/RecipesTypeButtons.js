import React, { useState } from "react";
import styles from "./RecipesTypeButtons.module.css";
import RecipesTypeButton from "../recipesTypeButton/RecipesTypeButton";
import { dummyButtons } from "../../utils/dummyButtons";
function RecipesTypeButtons() {
  const [activeButton, setActiveButton] = useState("all recipes");

  const showButtons = () => {
    return dummyButtons.map((data, index) => (
      <RecipesTypeButton
        index={index}
        data={data}
        key={index}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
    ));
  };
  return <div className={styles.recipesTypeContainer}>{showButtons()}</div>;
}

export default RecipesTypeButtons;
