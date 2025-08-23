"use strict";

import NavBar from '@/jsx/component/Header/NavBar.jsx'
import HeaderIconBox from "@/jsx/component/Header/HeaderIconBox.jsx";

function Header() {
    return (
        <header className="relative h-screen pt-18 text-white bg-[url('/static/img/hero-bg.webp')] bg-cover bg-fixed bg-center">
            <div className={"absolute inset-0 bg-black/70"}></div>
            <div className="relative container z-10 sm:mt-20 sm:space-y-40">
                <NavBar/>
                <div className={"mt-8 text-center max-w-120 mx-auto space-y-4"}>
                    <h1>
                        راه حل های قدرتمند دیجیتال با
                        <span className={"text-amber-400 block"}>
                            Kasuka
                        </span>
                    </h1>
                    <h2>ما تیمی از بازاریابان با استعداد دیجیتال هستیم</h2>
                </div>
                <div className={"mt-10 gap-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5"}>
                    <HeaderIconBox/>
                    <HeaderIconBox/>
                    <HeaderIconBox/>
                    <div className={"max-sm:space-y-2 sm:col-span-3 sm:flex sm:items-center sm:justify-center sm:px-16 sm:gap-2 lg:col-span-2 lg:p-0 lg:flex-row"}>
                        <HeaderIconBox/>
                        <HeaderIconBox/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header