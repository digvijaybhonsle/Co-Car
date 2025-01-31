import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Howitworks from "./components/Howitworks";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const AppRoutes = () => {
  const location = useLocation(); // This should now work since it's inside Router

  return (
    <motion.div
      key={location.pathname} // Ensure each route gets a unique key
      initial={{ opacity: 0 }} // Initial state (fade out)
      animate={{ opacity: 2 }} // Animate state (fade in)
      exit={{ opacity: 0 }} // Exit state (fade out)
      transition={{ duration: 1.0 }} // Set transition duration
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
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
