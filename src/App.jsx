import { BrowserRouter as Router } from "react-router-dom";
import Header from './Components/Header/Header';
import './App.module.scss';

function App() {
  return (
  <Router> 
    <Header />
    {/* <Switch>  
      <Route path='/about' exact>
        <About />
      </Route>
    </Switch>   */}
   </Router>
  );
}

export default App;
