"use strict";

import NavBar from '@/components/Header/NavBar.jsx'
import HeaderIconBox from "@/components/Header/HeaderIconBox.jsx";

function Header() {
    return (
        <>
            <NavBar/>
            <header id={"header"} className="relative max-h-max pt-18 pb-8 text-white bg-[url('/static/img/header/hero-bg.webp')] bg-cover bg-fixed bg-center">
                <div className={"absolute inset-0 bg-black/70"}></div>
                <div className="relative container z-20 sm:mt-40 sm:space-y-40">
                    <div className={"mt-14 text-center max-w-120 mx-auto space-y-3"}>
                        <h1>
                            راه حل های قدرتمند دیجیتال با
                            <span className={"text-amber-400 block"}>
                            Kasuka
                        </span>
                        </h1>
                        <h2>ما تیمی از بازاریابان با استعداد دیجیتال هستیم</h2>
                    </div>
                    <div className={"mt-8 gap-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5"}>
                        <HeaderIconBox text={"آموزش"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="oklch(82.8% 0.189 84.429)" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"/>
                        </svg>
                        }/>
                        <HeaderIconBox text={"نمونه کارها"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="oklch(82.8% 0.189 84.429)" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"/>
                        </svg>
                        }/>
                        <HeaderIconBox text={"اطلاعات"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="oklch(82.8% 0.189 84.429)" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                        }/>
                        <div className={"max-sm:space-y-2 sm:col-span-3 sm:flex sm:items-center sm:justify-center sm:px-16 sm:gap-2 lg:col-span-2 lg:p-0 lg:flex-row"}>
                            <HeaderIconBox text={"نتیجه"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="oklch(82.8% 0.189 84.429)" className="size-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                            }/>
                            <HeaderIconBox text={"نمودار"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="oklch(82.8% 0.189 84.429)" className="size-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"/>
                            </svg>
                            }/>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header