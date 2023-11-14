import { Outlet, useLocation, useNavigation } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import Footer from "../templates/Footer";
import Header from "./Header";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Loading from "./Loading";


function Layout() {
    
    const location = useLocation()

    const navigation = useNavigation()

    const [loading, setLoading] = useState(true);

    useEffect(() => {
       setTimeout(() => {
        setLoading(false)
       }, 5000)
    }, []);


    return (
        <>
            <ScrollToTop />
            <Header />
            <AnimatePresence mode="popLayout">
                <motion.div key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{
                    type: "tween",
                    //bounce: 0.55, 
                    //damping: 10,
                    duration: 0.30,
                    delay: 0.40
                }} >
                    <main className="row-start-2">
                        {navigation.state === loading ? <p className="m-auto text-8xl">Loading...</p> : <Outlet />}
                    </main>
                </motion.div>
            </AnimatePresence>
            <Footer />
        </>
    );
}

export default Layout;
