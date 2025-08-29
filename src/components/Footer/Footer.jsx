import FooterAddress from "@/components/Footer/FooterAddress/FooterAddress.jsx";
import FooterLinks from "@/components/Footer/FooterLinks/FooterLinks.jsx";

function Footer() {
    return (
        <footer className={"bg-[#151515] text-gray-200 py-10 mb-10 space-y-8"}>
            <FooterAddress/>
            <FooterLinks title={"لینک های مفید"} link1={"خانه"} link2={"درباره ما"} link3={"خدمات"} link4={"شرابط استفاده از خدمات"} link5={"سیاست های حفظ حریم خصوصی"}/>
            <FooterLinks title={"خدمات ما"} link1={"طراحی وبسایت"} link2={"توسعه وب"} link3={"مدیریت تولید"} link4={"طراحی دیزاین"} link5={"طراحی گرافیک"}/>
        </footer>
    )
}

export default Footer