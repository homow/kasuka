import FooterAddress from "@/components/Footer/FooterAddress/FooterAddress.jsx";
import FooterLinks from "@/components/Footer/FooterLinks/FooterLinks.jsx";
import FooterNews from "@/components/Footer/FooterNews/FooterNews.jsx";
import FooterCopyRight from "@/components/Footer/FooterCopyRight/FooterCopyRight.jsx"

function Footer() {
    return (
        <footer className={"bg-[#151515] text-gray-200 pt-10 space-y-4"}>
            <div className={"space-y-8 md:grid md:grid-cols-2 xl:grid-cols-4 container"}>
                <FooterAddress/>
                <FooterLinks title={"لینک های مفید"} link1={"خانه"} link2={"درباره ما"} link3={"خدمات"} link4={"شرابط استفاده از خدمات"} link5={"سیاست های حفظ حریم خصوصی"}/>
                <FooterLinks title={"خدمات ما"} link1={"طراحی وبسایت"} link2={"توسعه وب"} link3={"مدیریت تولید"} link4={"طراحی دیزاین"} link5={"طراحی گرافیک"}/>
                <FooterNews/>
            </div>
            <FooterCopyRight/>
        </footer>
    )
}

export default Footer