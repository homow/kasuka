"use strict";

import Header from "@/components/Header/Header.jsx";
import Main from "@/components/Main/Main.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import {useEffect} from "react";

function App() {
    useEffect(() => {
        const target = document.getElementById("header-trigger");
        const button = document.getElementById("scroll-button");

        if (!target || !button) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                button.classList.add("hidden");
            } else {
                button.classList.remove("hidden");
            }
        });

        observer.observe(target);

        return () => observer.disconnect();
    }, []);
    return (
        <>
            <span id="header-trigger" className="block"></span>
            <a id={"scroll-button"} href={'#'} className={"hidden p-2 fixed bottom-2 right-2 z-30 bg-amber-400 rounded-lg"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
                </svg>
            </a>
            <Header/>
            <Main/>
            <Footer/>
        </>
    )
}

export default App
