import {BASE_PATH} from "@/basePath.js";

function TeamSection({img="", title = "", job = ""}) {
    return (
        <div className={"shadow-primary space-y-4 pb-4 rounded-sm overflow-hidden"}>
            <div>
                <img loading={"lazy"} src={BASE_PATH + img} alt="team people" className={"w-full"}/>
            </div>
            <div className={"px-4"}>
                <h4 className={"font-bold mb-2"}>{title}</h4>
                <span className={"text-gray-600"}>{job}</span>
            </div>
        </div>
    )
}

export default TeamSection;