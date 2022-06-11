import './App.css';
import Header from './Components/Header'
import Showcase from './Components/Showcase'
import Footer from './Components/Footer'
import Pdp from './Components/Pdp'
import Admin from './Components/Admin'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Showcase />} />
        <Route path="/Pdp/:id/:name" element={<Pdp />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
