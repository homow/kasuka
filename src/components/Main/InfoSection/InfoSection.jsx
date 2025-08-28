function InfoSection({title = "title", text = "text"}) {
    return (
        <div className={"container"}>
            <h2 className="info-section-text">{title}</h2>
            <p className={"info-section-title"}>{text}</p>
        </div>
    )
}

export default InfoSection;