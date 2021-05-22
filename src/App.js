import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Cart from './components/Cart';
import Productpage from './components/Productpage';

function App() {
  return(
    <>
    <Router>

    
    <Switch>
          
          
          <Route exact path="/" component={Home}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/productpage/:name" component={Productpage}/>
          <Route path="/cart" component={Cart}/>
            
        </Switch>
        </Router>
    </>
  )
  
}

export default App;
