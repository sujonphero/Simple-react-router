import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route,} from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Friend from './component/Friends/Friend';
import NotFound from './component/NotFound/NotFound';
import Header from './component/Header/Header';
import FriendDetails from './component/FriendDetails/FriendDetails';

function App() {
  return (
    <div>
    
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
          <About></About>
          </Route>
          <Route path="/friend">
          <Friend></Friend>
          </Route>
          <Route path="/friend/:friendId">
          <FriendDetails></FriendDetails>
          </Route>
          <Route path="/*">
          <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
