import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// pages
import Home from './pages/home/home';
import News from './pages/healthNews/news';
import General from './pages/generalhealth/general';
import BMI from './pages/bmi/bmi';
import NotFound from './pages/404/404';
// layout
import Layout from './components/layout';
// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/news" element={<Layout><News /></Layout>} />
        <Route path="/healthconditions" element={<Layout><General /></Layout>} />
        <Route path="/bmicalculator" element={<Layout><BMI /></Layout>} />

        {/* 404 page - no layout empty screen*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
