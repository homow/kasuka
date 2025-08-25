function IconTitleText({icon, text = "", title = ""}) {
    return (
        <div className={"flex flex-row gap-1"}>
            {icon}
            <div className={""}>
                <h4 className={"text-xl font-dana-bl"}>{title}</h4>
                <p className={"mt-2"}>{text}</p>
            </div>
        </div>
    )
}

export default IconTitleText;