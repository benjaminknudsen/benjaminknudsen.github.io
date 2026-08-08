import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import AboutPage from "./pages/about-page";
import ContactPage from "./pages/contact-page";
import HomePage from "./pages/home-page";
import NotFoundPage from "./pages/not-found-page";
import ProjectPage from "./pages/project-page";
import ProjectsPage from "./pages/projects-page";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
