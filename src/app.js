import "./app.css";
// import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";
import { useState } from "react";

function App() {

  const [currentPage, setCurrentPage] = useState("About");

  function renderPage() {
    if (currentPage === "About") {
      return <About />
    } else if (currentPage === "Portfolio") {
      return <Portfolio />
    } else if (currentPage === "Contact") {
      return <ContactForm />
    } else if (currentPage === "Resume") {
      return <Resume />
    }
  }

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </>
  );
}

export default App;