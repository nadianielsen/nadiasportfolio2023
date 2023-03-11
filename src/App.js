import { Outlet } from "react-router-dom";
import Footer from "./templates/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="row-start-2">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
