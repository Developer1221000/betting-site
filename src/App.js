import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/navbar";

import Live from "./pages/live/live";
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Navbar />   
      <Routes>
        <Route path="/live" element={<Live />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
