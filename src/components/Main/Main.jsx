"use strict";

import TextIcon from "@/components/Main/Main-about/TextIcon.jsx";
import BrandsLogo from '@/components/Main/Main-about/BrandsLogo.jsx'
import IconTitleText from "@/components/Main/Main-Feature/IconTitleText.jsx";

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
                        <img className={"w-full h-12/12 xl:max-h-103"} src="/static/img/main/Feature.webp" alt="Feature Image"/>
                    </div>
                    <div className={"mt-8 space-y-6 md:space-y-8 basis-1/2 lg:mt-0"}>
                        <IconTitleText text={"نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند"} title={"تبلیغ سختی است"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="oklch(82.8% 0.189 84.429)" className="size-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>
                        } />
                        <IconTitleText text={"کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند"} title={"کدام یک از اینهاست"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="oklch(82.8% 0.189 84.429)" className="size-18 sm:size-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        } />
                        <IconTitleText text={"یا می پذیرد یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی که آنها را بیشتر می کند"} title={"یا کور شده است"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="oklch(82.8% 0.189 84.429)" className="size-18 sm:size-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        } />
                        <IconTitleText text={"آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند"} title={"حقیقت مبارک"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="oklch(82.8% 0.189 84.429)" className="size-16 sm:size-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                        </svg>
                        } />
                    </div>
                </div>
            </section>

            {/* --- Services Section --- */}
            <section id={"services"} className={"mt-20"}>
                <div className={"container"}>
                    <h2 className="info-section-text">خدمات</h2>
                    <p className={"info-section-title"}>خدمات ما را بررسی کنید</p>
                </div>
            </section>
        </main>
    )
}

export default Main
