import Home from "./pages/Home";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "aos/dist/aos.css";
import "lightgallery/css/lightgallery.css";
import { useEffect } from "react";
import aos from "aos";
function App() {
  useEffect(() => {
    aos.init({ once: true });
  }, []);
  return <Home />;
}

export default App;
