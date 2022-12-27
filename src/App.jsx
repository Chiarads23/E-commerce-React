import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Pages from "./Components/Pages";

import "./App.module.scss";

function App() {
  return (
    <BrowserRouter>
     
        <Header /> 
        <Routes>
          <Route path="/" element={<Pages />} />
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
