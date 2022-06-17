import "./App.css";
import Footer from "./Components/Footer/Footer";
import { GlobalStyle } from "./Components/globalStyles";
import Learn_Earn from "./Components/Pages/Learn_Earn";

function App() {
  return (
    <div className>
      <GlobalStyle />
      <Learn_Earn />
      <Footer />
    </div>
  );
}

export default App;
