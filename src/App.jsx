import { BrowserRouter as Router} from "react-router-dom";
import { useState } from "react";
import Header from "./Components/Header/Header";
import Pages from "./Components/Pages";

import "./App.module.scss";

function App() {

  return (
<div>
  <Router>
    <Header />
    <Pages />
  </Router>
</div>
  );
}

export default App;
