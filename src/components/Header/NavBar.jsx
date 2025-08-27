import {StrictMode} from 'react'

const navMenuHandler = elem => {
    const flagMenu = elem.currentTarget.dataset.navMenu;
    const openIcon = elem.currentTarget.querySelector("[data-icon-menu=open]");
    const closeIcon = elem.currentTarget.querySelector("[data-icon-menu=close]");
    const menu = document.getElementById("menu")
    const overlay = document.getElementById("overlay");

    elem.currentTarget.dataset.navMenu = flagMenu === "close" ? "open" : "close";

    openIcon.classList.toggle("hidden", elem.currentTarget.dataset.navMenu === "open");
    closeIcon.classList.toggle("hidden", elem.currentTarget.dataset.navMenu === "close");

    if (elem.currentTarget.dataset.navMenu === "open") {
        menu.style.right = "0"
        overlay.classList.remove("hidden");
    } else {
        menu.style.right = "-180px"
        overlay.classList.add("hidden");
    }
}

function NavBar() {
    return (<StrictMode>
        <nav className={"fixed bg-black/80 backdrop-blur-3xl z-10 top-0 py-4 right-0 left-0"}>
            <div className={'container flex items-center justify-between'}>
                <div id="overlay" className="fixed inset-0 -bottom-2000 bg-black/60 z-10 hidden"></div>
                <div className={"max-w-30"}><a href="https://homow.ir"><img className={"w-full"} src="/static/logo/logo.webp" alt="logo"/></a></div>
                <ul className={'z-20 max-md:fixed top-0 -right-45 -bottom-[100vh] transition-all duration-150 flex gap-1 max-md:flex-col md:flex-row md:grow md:justify-center md:gap-5 lg:gap-12 font-dana-md max-md:text-black max-md:bg-white w-40'} id={"menu"}>
                    <li>
                        <a className={'block max-md:py-4 max-md:pr-4 max-md:hover:bg-amber-400 md:hover:text-amber-400 transition-all duration-300'} href="/">خانه</a>
                    </li>
                    <li>
                        <a className={'block max-md:py-4 max-md:pr-4 max-md:hover:bg-amber-400 md:hover:text-amber-400 transition-all duration-300'} href="">درباره ما</a>
                    </li>
                    <li>
                        <a className={'block max-md:py-4 max-md:pr-4 max-md:hover:bg-amber-400 md:hover:text-amber-400 transition-all duration-300'} href="">خدمات</a>
                    </li>
                    <li>
                        <a className={'block max-md:py-4 max-md:pr-4 max-md:hover:bg-amber-400 md:hover:text-amber-400 transition-all duration-300'} href="">نمونه کارها</a>
                    </li>
                    <li>
                        <a className={'block max-md:py-4 max-md:pr-4 max-md:hover:bg-amber-400 md:hover:text-amber-400 transition-all duration-300'} href="">تیم</a>
                    </li>
                    <li>
                        <a className={'block max-md:py-4 max-md:pr-4 max-md:hover:bg-amber-400 md:hover:text-amber-400 transition-all duration-300'} href="">تماس با ما</a>
                    </li>
                </ul>
                <div className={"cursor-pointer"}>
                    <span onClick={navMenuHandler.bind(this)} data-nav-menu="close" className={"z-30 md:hidden"}>
                        <svg data-icon-menu='open' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 z-30">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                        </svg>
                        <svg data-icon-menu='close' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hidden z-30">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                        </svg>
                    </span>

                    <a className={'hidden md:block border-amber-400 hover-links'} href="https://homow.ir">شروع</a>
                </div>
            </div>
        </nav>
    </StrictMode>)
}

window.onclick = e => {
    const path = e.composedPath();
    const btnNavMenu = document.querySelector("[data-nav-menu]");
    const menu = document.getElementById("menu");

    if (btnNavMenu && btnNavMenu.dataset.navMenu === "open" && !path.includes(menu) && !path.includes(btnNavMenu)) {
        navMenuHandler({currentTarget: btnNavMenu});
    }
};

export default NavBar