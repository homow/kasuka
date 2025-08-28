"use strict";

import InfoSection from "@/components/Main/InfoSection/InfoSection.jsx";
import TextIcon from "@/components/Main/Main-about/TextIcon.jsx";
import BrandsLogo from '@/components/Main/Main-about/BrandsLogo.jsx'
import IconTitleText from "@/components/Main/Main-Feature/IconTitleText.jsx";
import TitleIconServices from "@/components/Main/Main-Services/TitleIconServices.jsx"
import MainCountIcons from "@/components/Main/Main-Count-Icons/MainCountIcons.jsx";
import Testimonials from "@/components/Main/Testimonials/Testimonials.jsx";
import TeamSection from "@/components/Main/TeamSction/TeamSection.jsx";
import ContactInfo from "@/components/Main/ContactInfo/ContactInfo.jsx";
import Form from "@/components/Main/Form/Form.jsx";

function Main() {
    return (
        <main id={"main"} className={"mt-8 pb-20"}>
            {/* --- About Section --- */}
            <section id={"about"}>
                <div className={"container"}>
                    <div className={"flex flex-col gap-4 lg:flex-row-reverse"}>
                        <div className={"basis-1/2 max-w-175 mx-auto"}>
                            <img className={"w-full"} src="/static/img/main/about.webp" alt="about this site" loading={"lazy"}/>
                        </div>
                        <div className={"basis-1/2 flex gap-2 flex-col"}>
                            <h2>شرکت دیجیتال کاسوکا</h2>
                            <p className={"text-justify"}>
                                شرکت دیجیتال مارکتینگ نوآد به عنوان شرکتی پیشرو در صنعت دیجیتال مارکتینگ ایران در تلاش است تا با بهره گیری از دانش فنی روز و ارایه راهکارهای نوین بازاریابی و برندینگ، با پیشرفت کسب و کارهای داخلی نقش مهمی در شکوفایی اقتصادی ایران ایفا نماید و با تثبیت نام نوآد به عنوان تخصصی ترین برند دیجیتال مارکتینگ در ایران و گسترش نام آن در بازارهای جهانی به صادرات خدمات مبتنی بر تکنولوژی های نوین گام بردارد. نوآد پیشرفت خود در طول یک دهه فعالیت را مرهون شفافیت، انسجام و پایبندی به نتایج پیش بینی شده مشتریان خود می داند. سرمایه گذاری روی تکنولوژی های نوین، کیفیت و نوآوری، پایبندی به تعهدات، رضایتمندی و وفاداری مشتریان، نیروی انسانی متمرکز و پویا از ارزش های ذاتی نوآد می باشند.
                            </p>
                            <div className={"flex flex-col gap-4 mt-6"}>
                                <TextIcon text={"۱۰ سال تجربه ارایه خدمات تخصصی دیجیتال مارکتینگ و راهکارهای نوین بازاریابی"}/>
                                <TextIcon text={"تمرکز ما در تمامی استراتژی های اجرایی معطوف به دیجیتال برندینگ و همسو کردن استراتژی های دیجیتال مارکتینگ با دیگر فعالیت های برندینگ و بازاریابی شما می باشد."}/>
                                <TextIcon text={"برای دریافت آخرین اخبار، گرایش ها و رویداد های دیجیتال مارکتینگ ثبت نام کنید"}/>
                            </div>
                            <p className={"mt-6"}>
                                خدمات نوآد در جهت یکپارچه سازی تمامی فعالیت های یک کسب و کار از مرحله ورود به بازار، ساخت، گسترش و ایجاد تصویری یکپاچه از برند، دیجیتال مارکتینگ، افزایش مزیت رقابتی و سهم بازار تا مراحل پس از فروش و ایجاد وفاداری در مشتریان یک برند ارایه می گردد.
                            </p>
                        </div>
                    </div>
                    <div className={"mt-20 flex flex-row gap-12 overflow-x-auto"}>
                        <BrandsLogo img="imgi_1_logo.webp"/>
                        <BrandsLogo img="imgi_3_client-5.webp"/>
                        <BrandsLogo img="imgi_4_client-6.webp"/>
                        <BrandsLogo img="imgi_5_client-7.webp"/>
                        <BrandsLogo img="imgi_6_client-8.webp"/>
                        <BrandsLogo img="imgi_7_client-1.webp"/>
                        <BrandsLogo img="imgi_8_client-2.webp"/>
                        <BrandsLogo img="imgi_9_client-3.webp"/>
                        <BrandsLogo img="imgi_10_client-4.webp"/>
                    </div>
                </div>
            </section>

            {/* --- Feature Section --- */}
            <section id="feature" className={"mt-20"}>
                <div className={"container lg:flex lg:flex-row lg:gap-4 lg:items-center lg:justify-center"}>
                    <div className={"lg:max-w-165 lg:max-h-103 basis-1/2"}>
                        <img loading={"lazy"} className={"w-full h-12/12 xl:max-h-103"} src="/static/img/main/Feature.webp" alt="Feature Image"/>
                    </div>
                    <div className={"mt-8 space-y-6 md:space-y-8 basis-1/2 lg:mt-0"}>
                        <IconTitleText text={"نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند"} title={"تبلیغ سختی است"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="oklch(82.8% 0.189 84.429)" className="size-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/>
                        </svg>
                        }/>
                        <IconTitleText text={"کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند"} title={"کدام یک از اینهاست"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="oklch(82.8% 0.189 84.429)" className="size-18 sm:size-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z"/>
                        </svg>
                        }/>
                        <IconTitleText text={"یا می پذیرد یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی که آنها را بیشتر می کند"} title={"یا کور شده است"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="oklch(82.8% 0.189 84.429)" className="size-18 sm:size-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
                        </svg>
                        }/>
                        <IconTitleText text={"آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند"} title={"حقیقت مبارک"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="oklch(82.8% 0.189 84.429)" className="size-16 sm:size-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"/>
                        </svg>
                        }/>
                    </div>
                </div>
            </section>

            {/* --- Services Section --- */}
            <section id={"services"} className={"mt-20"}>
                <InfoSection title={"خدمات"} text={"خدمات ما را بررسی کنید"}/>
                <div className={"container space-y-6 mt-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3"}>
                    <TitleIconServices icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/>
                    </svg>
                    } title={"لورم اپیسوم"} text={"برای آرامش بخشیدن و لذت بردن از مفاسد ، چه دردها و چه دردسرهایی را دریافت خواهند کرد"}/>

                    <TitleIconServices icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"/>
                    </svg>
                    } title={"اما همانطور که مشاهده می کنید"} text={"آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند"}/>

                    <TitleIconServices icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
                    </svg>
                    } title={"دردهای بزرگ"} text={"آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند"}/>

                    <TitleIconServices icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"/>
                    </svg>
                    } title={"هیچکس دیگر"} text={"آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند"}/>

                    <TitleIconServices icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"/>
                    </svg>
                    } title={"دیوا دان"} text={"\"آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، خدمات خود مقصر هستند"}/>
                    <TitleIconServices icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"/>
                    </svg>
                    } title={"لولا را پاک کنید"} text={"آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، خدمات خود مقصر هستند"}/>
                </div>
            </section>

            {/* first-cta */}
            <section id={"first-cta"} className={"mt-10 text-white relative bg-[url('/static/img/main/first-cta-bg.webp')] bg-fixed bg-center bg-cover py-12"}>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className={"container relative z-10 text-center space-y-8"}>
                    <h3 className={"text-title"}>فراخوانی برای اقدام</h3>
                    <p>
                        اما محکوم کردن درد در فیلم غیرقابل تصور است ، در لذت می خواهد از درد سیلوس بودن بدون نتیجه فرار کند. آنها استثنائاتی هستند که کورها به دنبال آن هستند ، آنها نمی بینند ، آنها کسانی هستند که مسئولیت های خود را به تقصیری واگذار می کنند که سختی های روح را تسکین می دهد.
                    </p>
                    <a href="https://card.homow.ir" className="border-white hover:border-amber-400 hover-links">فراخوانی برای اقدام</a>
                </div>
            </section>

            {/* portfolio */}
            <section className={"mt-20"}>
                <InfoSection title={"نمونه کارها"} text={"نمونه کارهای ما را بررسی کنید"}/>
                <div className={"container"}>
                    <ul className={"mt-10 flex flex-row justify-center items-center gap-2 *:transition-all *:duration-150 *:cursor-pointer *:hover:bg-amber-400 *:hover:text-black *:py-1 *:px-2 *:rounded-sm"}>
                        <li>همه</li>
                        <li>برنامه</li>
                        <li>محصول</li>
                        <li>اینترنت</li>
                    </ul>
                    <div className={"mt-10 space-y-8 sm:columns-2 md:columns-3 lg:columns-4"}>
                        <div className={"max-h-max"}>
                            <img loading={"lazy"} className={"w-full h-auto object-cover"} src="/static/img/main/portfolio/imgi_11_portfolio-1.webp" alt="img"/>
                        </div>
                        <div className={"max-h-max"}>
                            <img loading={"lazy"} className={"w-full h-auto object-cover"} src="/static/img/main/portfolio/imgi_12_portfolio-2.webp" alt="img"/>
                        </div>
                        <div className={"max-h-max"}>
                            <img loading={"lazy"} className={"w-full h-auto object-cover"} src="/static/img/main/portfolio/imgi_13_portfolio-3.webp" alt="img"/>
                        </div>
                        <div className={"max-h-max"}>
                            <img loading={"lazy"} className={"w-full h-auto object-cover"} src="/static/img/main/portfolio/imgi_15_portfolio-5.webp" alt="img"/>
                        </div>
                        <div className={"max-h-max"}>
                            <img loading={"lazy"} className={"w-full h-auto object-cover"} src="/static/img/main/portfolio/imgi_14_portfolio-4.webp" alt="img"/>
                        </div>
                        <div className={"max-h-max"}>
                            <img loading={"lazy"} className={"w-full h-auto object-cover"} src="/static/img/main/portfolio/imgi_17_portfolio-7.webp" alt="img"/>
                        </div>
                        <div className={"max-h-max"}>
                            <img loading={"lazy"} className={"w-full h-auto object-cover"} src="/static/img/main/portfolio/imgi_18_portfolio-8.webp" alt="img"/>
                        </div>
                        <div className={"max-h-max"}>
                            <img loading={"lazy"} className={"w-full h-auto object-cover"} src="/static/img/main/portfolio/imgi_16_portfolio-6.webp" alt="img"/>
                        </div>
                        <div className={"max-h-max"}>
                            <img loading={"lazy"} className={"w-full h-auto object-cover"} src="/static/img/main/portfolio/imgi_19_portfolio-9.webp" alt="img"/>
                        </div>
                    </div>
                </div>
            </section>

            {/* count-section */}
            <section id={"count-section"} className={"mt-20"}>
                <div className={"container xl:max-w-[80%] 2xl:max-w-[70%] xl:flex flex-row gap-4"}>
                    <div className={"basis-1/3 md:h-100 xl:w-200"}>
                        <img loading={"lazy"} src="/static/img/main/imgi_32_counts-img.webp" alt="team" className="w-full h-full object-cover"/>
                    </div>
                    <div className={"basis-2/3"}>
                        <div className={"mt-8 xl:mt-0"}>
                            <h3 className={"text-title"}>شایسته ترین لذت را به هر حال ارائه می دهد</h3>
                            <p className={"mt-2"}>
                                خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد مقصر است
                            </p>
                        </div>
                        <div className={"mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2"}>
                            <MainCountIcons icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="oklch(82.8% 0.189 84.429)" className="size-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"/>
                            </svg>
                            } count={"85"} text={"پروژه ها برای بدست آوردن و زمانی که او کل کسانی را که از او تعریف می کنند رد می کند و آنها را حقیر می شمارد"}/>
                            <MainCountIcons icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="oklch(82.8% 0.189 84.429)" className="size-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"/>
                            </svg>
                            } count={"35"} text={"سال ها تجربه یا اجازه دهید به دنبال نوعی مزیت باشد"}/>
                            <MainCountIcons icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="oklch(82.8% 0.189 84.429)" className="size-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"/>
                            </svg>
                            } count={"65"} text={"مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم."}/>
                            <MainCountIcons icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="oklch(82.8% 0.189 84.429)" className="size-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"/>
                            </svg>
                            } count={"20"} text={"جوایز درد دردناک تر است در زمانی دیگر که هیچکس او را متهم نمی کند و هیچ وقت او را متهم نمی کند"}/>
                        </div>
                    </div>
                </div>
            </section>

            {/* testimonials section */}
            <section id="testimonials" className={"relative mt-20 bg-[url('/static/img/main/testimonials/imgi_33_testimonials-bg.webp')] bg-fixed bg-center bg-cover py-14"}>
                <div className="absolute inset-0 bg-black/80"></div>

                <div className="relative z-20 max-w-200 mx-auto flex flex-row gap-4 overflow-x-auto overflow-y-hidden">
                    <Testimonials img="public/static/img/main/testimonials/imgi_22_testimonials-3.webp" title="سارا ویلسون" subtitle="فریلسنر" text="پیامد های خالص بدون هیچ افزونه و وابستگی و فریم ورک یا کتابخانه ای، همه چیز خالص ترین حالت ممکن است، همه چی صاف و زیبا، دقیقا شبیه به درست بودن ایران."/>
                    <Testimonials img="public/static/img/main/testimonials/imgi_22_testimonials-3.webp" title="سارا ویلسون" subtitle="فریلسنر" text="پیامد های خالص بدون هیچ افزونه و وابستگی و فریم ورک یا کتابخانه ای، همه چیز خالص ترین حالت ممکن است، همه چی صاف و زیبا، دقیقا شبیه به درست بودن ایران."/>
                    <Testimonials img="public/static/img/main/testimonials/imgi_22_testimonials-3.webp" title="سارا ویلسون" subtitle="فریلسنر" text="پیامد های خالص بدون هیچ افزونه و وابستگی و فریم ورک یا کتابخانه ای، همه چیز خالص ترین حالت ممکن است، همه چی صاف و زیبا، دقیقا شبیه به درست بودن ایران."/>
                    <Testimonials img="public/static/img/main/testimonials/imgi_22_testimonials-3.webp" title="سارا ویلسون" subtitle="فریلسنر" text="پیامد های خالص بدون هیچ افزونه و وابستگی و فریم ورک یا کتابخانه ای، همه چیز خالص ترین حالت ممکن است، همه چی صاف و زیبا، دقیقا شبیه به درست بودن ایران."/>
                    <Testimonials img="public/static/img/main/testimonials/imgi_22_testimonials-3.webp" title="سارا ویلسون" subtitle="فریلسنر" text="پیامد های خالص بدون هیچ افزونه و وابستگی و فریم ورک یا کتابخانه ای، همه چیز خالص ترین حالت ممکن است، همه چی صاف و زیبا، دقیقا شبیه به درست بودن ایران."/>
                </div>
            </section>

            {/* team section */}
            <section id={"team-section"} className={"mt-20"}>
                <InfoSection title={"تیم"} text={"تیم ما را بررسی کنید"}/>
                <div className={"mt-8 container space-y-8 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-8 lg:grid lg:grid-cols-4 lg:gap-8"}>
                    <TeamSection img={"/static/img/main/team/imgi_25_team-1.webp"} title={"چنگیز"} job={"مدیر کل"}/>
                    <TeamSection img={"/static/img/main/team/imgi_26_team-2.webp"} title={"والتر وایت"} job={"مدیر اجرایی"}/>
                    <TeamSection img={"/static/img/main/team/imgi_27_team-3.webp"} title={"دکستر"} job={"فرانت اند"}/>
                    <TeamSection img={"/static/img/main/team/imgi_28_team-4.webp"} title={"هانیبال"} job={"بک اند"}/>
                </div>
            </section>

            {/* contact us */}
            <section id={"contact-us"} className={"mt-20"}>
                <InfoSection title={"تماس با ما"} text={"با ما تماس بگیرید"}/>

                {/* map */}
                <div id={"map"} className={"mt-8 container"}>
                    <iframe style={{border: 0, width: '100%', height: '270px'}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" allowFullScreen loading="lazy" title="Google Map"></iframe>
                </div>

                <div className="mt-12 container flex flex-col gap-8 md:flex-row">
                    <div className={"basis-2/5 space-y-8"}>
                        <ContactInfo icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                        </svg>
                        } title={"مکان:"} text={"تهران خیابان آزادی"}/>
                        <ContactInfo icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
                        </svg>
                        } title={"ایمیل:"} text={"homow_dev.proton.me"}/>
                        <ContactInfo icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/>
                        </svg>
                        } title={"شماره تماس:"} text={"0123456789"}/>
                    </div>
                    <div className={"basis-3/5"}>
                        <Form/>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main
