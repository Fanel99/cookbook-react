import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';
import Create from './pages/create/Create';
import Home from './pages/home/Home';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
