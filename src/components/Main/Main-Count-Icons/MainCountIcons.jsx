function MainCountIcons({icon, count, text}) {
    return (
        <div>
            <div className={"flex flex-row gap-2 items-center"}>
                {icon}
                <span className={"text-4xl pr-2 text-black/90"}>{count}</span>
            </div>
            <p className={"mt-2 indent-6"}>{text}</p>
        </div>
    )
}

export default MainCountIcons