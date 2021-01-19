import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Employees from "./pages/employees";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={Employees} /> 
        </Wrapper>   
      </div>
    </Router>
  );
}

export default App;
