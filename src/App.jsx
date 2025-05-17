import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import BritishKidz from './components/BritishKidz';
import TuitionBala from './components/TuitionBala';
import Footer from './components/Footer';
import TechShowcase from './components/TechShowcase';

const App = () => {
  return (
   <div>

       <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="britishKidz" element={<BritishKidz/>} />
          <Route path="tuitionWala" element={<TuitionBala />} />
           <Route path="codeStart" element={<TechShowcase />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
      <Footer/>
   </div>
  );
};

export default App;
