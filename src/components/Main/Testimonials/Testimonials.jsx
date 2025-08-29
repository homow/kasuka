import {BASE_PATH} from "@/basePath.js";

function Testimonials({img = "", title = "", subtitle = "", text = ""}) {
    return (
        <div className={"shrink-0 w-full px-4 py-2 space-y-4 text-white text-center"}>
            <div className={"overflow-hidden rounded-full border-4 border-white/20 mx-auto max-w-16"}>
                <img loading={"lazy"} src={BASE_PATH + img} alt="img people" className={"w-full"}/>
            </div>
            <h4 className={"mt-2 text-2xl"}>{title}</h4>
            <h5 className={"text-gray-300"}>{subtitle}</h5>
            <p className={"leading-6 md:text-lg"}>{text}</p>
        </div>
    )
}

export default Testimonials