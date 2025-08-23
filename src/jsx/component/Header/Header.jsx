"use strict";

import NavBar from '@/jsx/component/Header/NavBar.jsx'

function Header() {
    return (
        <header className="h-screen pt-4 text-white bg-[url('/static/img/hero-bg.webp')] bg-cover bg-fixed">
            <div className="container">
                <NavBar/>
            </div>
        </header>
    )
}

export default Header