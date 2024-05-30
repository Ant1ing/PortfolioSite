import { useEffect } from 'react';
import { useLocation, BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function RoutesComponent() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default RoutesComponent;