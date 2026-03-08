//dependency
import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

//components
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/HomePage/Home";
import { Work } from "./components/Work/Work";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

//css imports
import "./App.css";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="ui-app">
      <div
        style={{
          maxWidth: "900px",
          margin: "0px auto",
          textAlign: "center",
          color: "blue",
        }}
      >
        Hi Thank you for visiting but the page is now migrated to :
        <span>
          <a
            style={{ cursor: "pointer", color: "red" }}
            href="https://prashantnathv2.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Version 2
          </a>
        </span>
      </div>
      <Navbar />
      <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route index path="/home" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="*" element={<Navigate to="/home" replace={true} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
