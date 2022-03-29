import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Navbar from "./components/parts/Navbar";
import Footer from "./components/parts/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/login" element={<Login title={title} />} />
            <Route path="/register" element={<Register title={title} />} /> */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
