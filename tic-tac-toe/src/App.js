import Header from "./components/Header";
import Footer from "./components/Footer";
import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Configuration from "./components/Configuration";
import ActiveGame from "./components/ActiveGame";

function App() {
  return (
    <>
      <Backdrop />
      <Header />
      <main>
        <Modal />
        <Configuration />
        <ActiveGame />
      </main>
      <Footer />
    </>
  );
}

export default App;
