function Testimonials({img = "", title = "", subtitle = "", text = ""}) {
    return (
        <div className={"max-w-170 space-y-4 text-white"}>
            <div className={"overflow-hidden rounded-full border-4 border-white/20 mx-auto max-w-16"}>
                <img src={img} alt="img people" className={"w-full"}/>
            </div>
            <h4 className={"mt-2"}>{title}</h4>
            <h5>{subtitle}</h5>
            <p>{text}</p>
        </div>
    )
}

export default Testimonials