"use strict";

import NavBar from '@/jsx/component/Header/NavBar.jsx'

function Header() {
    return (
        <header className="h-screen bg-[url('/static/img/hero-bg.webp')] bg-cover bg-fixed">
            <NavBar/>
        </header>
    )
}

export default Header