import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from './components/Services'

import "../src/styles/App.scss"
import "../src/styles/Header.scss"
import "../src/styles/Home.scss"
import "../src/styles/Footer.scss"
import "../src/styles/Contact.scss"
import "../src/styles/Services.scss"
import "../src/styles/MediaQueries.scss"


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Services" element={<Services />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
