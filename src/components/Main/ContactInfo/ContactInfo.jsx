function ContactInfo({icon, title, text}) {
    return (
        <div className={"flex flex-row gap-4 items-center"}>
            <div className={"bg-amber-400 p-3 rounded-sm"}>
                {icon}
            </div>
            <div>
                <h4 className={"text-xl font-dana-bl"}>{title}</h4>
                <span className="text-gray-600">{text}</span>
            </div>
        </div>
    )
}

export default ContactInfo;