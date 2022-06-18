import "./App.css";
import Footer from "./Components/Footer/Footer";
import { GlobalStyle } from "./Components/globalStyles";
import Navbar from "./Components/Navbar/Navbar";
import Learn_Earn from "./Components/Pages/Learn_Earn";

function App() {
  return (
    <div className>
      <GlobalStyle />
      <Navbar />
      <Learn_Earn />
      <Footer />
    </div>
  );
}

export default App;
