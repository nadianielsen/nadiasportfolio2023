import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import Footer from "../templates/Footer";
import Header from "./Header";

function Layout() {
    return (
        <>
        <ScrollToTop/>
            <Header />
            <main className="row-start-2">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;
