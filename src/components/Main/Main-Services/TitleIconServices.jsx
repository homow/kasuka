function TitleIconServices(icon, title, text) {
    return (
        <div className={""}>
            {icon}
            <h4 className="text-2xl font-dana-bl"><a href="">{title}</a></h4>
            <p>{text}</p>
        </div>
    )
}

export default TitleIconServices;