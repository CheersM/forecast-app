import { Redirect, Route, Switch } from 'react-router';
import CitiesPage from './pages/CitiesPage';
import HomePage from './pages/HomePage';
import ForecastPage from './pages/ForecastPage';

function App() {
  return (
    <Switch>
      <Route path="/home" exact>
        <HomePage />
      </Route>
      <Route path="/cities" exact>
        <CitiesPage />
      </Route>
      <Route path="/forecast" exact>
        <ForecastPage />
      </Route>
      <Redirect to="/home" />
    </Switch>
  );
}

export default App;
