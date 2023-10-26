import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import Footer from "../templates/Footer";
import Header from "./Header";
import { AnimatePresence, motion } from "framer-motion";


function Layout() {

    const location = useLocation()

    return (
        <>
            <ScrollToTop />
            <Header />
            <AnimatePresence mode="popLayout">
                <motion.div key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{
                    type: "tween",
                    //bounce: 0.55, 
                    //damping: 10,
                    duration: 0.30
                }} >
                    <main className="row-start-2">
                        <Outlet />
                    </main>
                </motion.div>
            </AnimatePresence>
            <Footer />
        </>
    );
}

export default Layout;
