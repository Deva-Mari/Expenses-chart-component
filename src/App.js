import styles from "./App.module.css";
import Balance from "./components/Balance";
import Spending from "./components/Spending";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={styles.content}>
      <Balance/>
      <Spending/>
      <Footer/>
    </div>
  );
}

export default App;
