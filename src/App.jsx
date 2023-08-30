import { Routes, Route } from "react-router-dom";
import NavbarComponets from "./Components/NavbarComponets";
import FaqComponents from "./Components/FaqComponents";
import FooterComponents from "./Components/FooterComponents";
import Homepage from "./pages/Homepage";
import Kelaspage from "./pages/Kelaspage";
import Syaratpage from "./pages/Syaratpage";
import Testimonipage from "./pages/Testimonipage";
import Faqpage from "./pages/Faqpage";

function App() {
  return (
    <div>
      <NavbarComponets/>
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/kelas" Component={Kelaspage} />
        <Route path="/syarat" Component={Syaratpage} />
        <Route path="/testimoni" Component={Testimonipage} />
        <Route path="/faq" Component={Faqpage} />
      </Routes>
      <FooterComponents/>
    </div>
  );
}

export default App;
