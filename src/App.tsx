// CSS
import styles from "./App.module.css";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2>Olá Mundo</h2>
      </main>
      <Footer />
    </>
  );
}

export default App;
