import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Howitworks from "./pages/Howitwas";
import Home from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";

const AppRoutes = () => {
  const location = useLocation(); 

  return (
    <motion.div
      key={location.pathname} 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 2 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 1.0 }} 
    >
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<Howitworks />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </motion.div>
  );
};

function App() {
  return (
    <Router>
      <div className="bg-[#FFF] font-family-poppins">
        <Header className="fixed"/>
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
