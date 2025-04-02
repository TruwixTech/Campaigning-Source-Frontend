import { useState, useEffect } from "react";
import Footer from "./Footer";
import Chatbot from "./Chatbot";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Cookies from "./Cookies";

const Layout = ({ children }) => {
    const [isCookieVisible, setCookieVisible] = useState(false);

    useEffect(() => {
        // Check if the dialog has been shown before
        const hasDialogBeenShown = localStorage.getItem("hasDialogBeenShown");

        if (!hasDialogBeenShown) {
            // If not shown, set a flag and show the dialog
            localStorage.setItem("hasDialogBeenShown", "true");
            setCookieVisible(true);
        }
    }, []);

    const closeDialog = () => {
        setCookieVisible(false);
    };

    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <Searchbar />
            {children}
            <Footer />
            <Chatbot />
            {isCookieVisible && <Cookies closeDialog={closeDialog} />}
        </div>
    );
};

export default Layout;
