import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Sertificate from "./components/Sertificate";
import SertificateFull from "./components/sertificateFull";

// Fungsi untuk Scroll ke Atas
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
}

function App() {
  const location = useLocation();

  // Periksa jika path adalah "/sertificate-full"
  const hideHeader = location.pathname === "/sertificate-full";

  return (
    <div className="bg-gray-50">
      {/* Tampilkan Header jika bukan di halaman SertificateFull */}
      {!hideHeader && <Header />}

      {/* Rute Halaman */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Education />
              <Skills />
              <Sertificate />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/sertificate-full" element={<SertificateFull />} />
      </Routes>
    </div>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  );
}

export default AppWithRouter;
