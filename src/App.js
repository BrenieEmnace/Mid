import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Venues from './Venues';
import ShoesIndex from './ShoesIndex';
import Schedules from './Schedules';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route path="/about">
        <About />
        </Route>
        <Route path="/shoes">
        <ShoesIndex />
        </Route>
        <Route path="/venues/:id">
          <Schedules />
        </Route>
        <Route path="/venues">
        <Venues />
        </Route>
        
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
