import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//pages
import Home from './pages/home/home';
import News from './pages/healthNews/news';
import General from './pages/generalhealth/general';
import BMI from './pages/bmi/bmi';
//comps
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Footer from './components/footer/footer';
//css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div id="root">
        <Navbar />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/generalhealth" element={<General />} />
            <Route path='/bmicalculator' element={<BMI />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App
