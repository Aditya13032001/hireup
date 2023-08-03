import Navbar from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Feedback from "./pages/Feedback";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
