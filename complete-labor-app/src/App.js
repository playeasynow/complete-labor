import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/complete-labor" component={About} />
          <Route exact path="/complete-labor-about" component={About} />
          <Route exact path="/complete-labor-work" component={Discover} />
          <Route exact path="/complete-labor-faq" component={Search} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
