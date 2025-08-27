function TitleIconServices({icon, title = "", text = ""}) {
    return (
        <div className={"flex items-center justify-center flex-col border border-gray-200 gap-4 py-20 px-5 hover:shadow-primary hover:-translate-y-2 hover:border-white transition-all duration-700"}>
            <div className={"bg-amber-400 p-4 rounded-sm"}>
                {icon}
            </div>
            <h4 className="text-center text-xl font-dana-bl text-black/90 hover:text-amber-400 transition-all duration-200"><a href="">{title}</a></h4>
            <p className={"text-center"}>{text}</p>
        </div>
    )
}

export default TitleIconServices;