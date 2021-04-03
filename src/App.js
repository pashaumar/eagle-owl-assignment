import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import RecipesContainer from "./components/recipesContainer/RecipesContainer";
import RecipesTypeButtons from "./components/recipesTypeButtons/RecipesTypeButtons";
import AllRecipes from "./components/allRecipes/AllRecipes";
import IncorrectRecipes from "./components/incorrectRecipes/IncorrectRecipes";
import Untagged from "./components/untagged/Untagged";
import Disabled from "./components/disabled/Disabled";
function App() {
  return (
    <div className="App">
      <Router>
        <RecipesContainer />
        <RecipesTypeButtons />
        <Switch>
          <Route path={ROUTES.ALL_RECIPES} exact component={AllRecipes} />
          <Route path={ROUTES.INCORRECT} component={IncorrectRecipes} />
          <Route path={ROUTES.UNTAGGED} component={Untagged} />
          <Route path={ROUTES.DISABLED} component={Disabled} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
