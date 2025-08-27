function TextIcon({text = ""}) {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="oklch(0.828 0.189 84.429)" className="size-6 inline-block">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <span>{text}</span>
        </div>
    )
}

export default TextIcon;