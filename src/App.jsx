import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Process from "./components/Process/Process";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import OurServices from "./components/OurServices/OurServices";
import Leaders from "./components/Leaders/Leaders";
import Clients from "./components/Clients/Clients";
import TechStack from "./components/TechStack/TechStack";
import Records from "./components/Records/Records";
import Contact from "./components/Contact/Contact";
import CallToAction from "./components/CallToAction/CallToAction";

function App() {
  return (
    <BrowserRouter>
      
      <Header />

      <Routes>

        {/* ✅ HOME — show ALL sections */}
        <Route
          path="/"
          element={
            <>
              <Home />
              {/* <About />
              <Process /> */}
              {/* <WhatWeDo /> */}
              {/* <OurServices />
              <Leaders /> */}
              {/* <Clients />
              <TechStack /> */}
              <Records />
              {/* <Contact /> */}
              <CallToAction />
            </>
          }
        />

        {/* ✅ OTHER ROUTES */}
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Process />} />
        <Route path="/team" element={<Leaders />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/certificates" element={<OurServices />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
