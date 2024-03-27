import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Aboutus from "../Components/Aboutus";
import Finalcontact from "../Components/Finalcontact";
import Portwed from "../Components/Portwed";
import Porteng from "../Components/Porteng";
import PageNotFound from "../Components/PageNotFound";
import Collage1 from "../Components/Collage1";
import Collage2 from "../Components/Collage2";
import Collage3 from "../Components/Collage3";
import Collage4 from "../Components/Collage4";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<Aboutus />}></Route>
          {/* <Route path="/portfolio" element={<Portfolio />}></Route> */}
          <Route path="/contact" element={<Finalcontact />}></Route>
          <Route path="/wedding" element={<Portwed />}></Route>
          <Route path="/engagements" element={<Porteng />}></Route>
          <Route path="/pre-wedding" element={<Collage1 />}></Route>
          <Route path="/post-wedding" element={<Collage2 />}></Route>
          <Route path="/wedding" element={<Collage3 />}></Route>
          <Route path="/photography" element={<Collage4 />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
