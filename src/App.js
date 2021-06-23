import './App.css';
import Todolist from './Component/todo-list';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Navbar from './Component/navbar';
import Page from './Component/page';

const App = () => {

  return (
    <>

      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/Todolist" component={Todolist} />
          <Route exact path="/page" component={Page} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
