function FooterLinks({title, link1, link2, link3, link4, link5}) {
    return (
        <div className={"space-y-3 container"}>
            <h4 className={"font-dana-bl"}>{title}</h4>
            <ul className={"*:flex *:pr-2 space-y-3 font-dana-lt"}>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="oklch(82.8% 0.189 84.429)" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                    <a className={"hover:text-amber-400 transition-all duration-200 cursor-pointer"} target="_blank">{link1}</a>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="oklch(82.8% 0.189 84.429)" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                    <a className={"hover:text-amber-400 transition-all duration-200 cursor-pointer"} target="_blank">{link2}</a>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="oklch(82.8% 0.189 84.429)" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                    <a className={"hover:text-amber-400 transition-all duration-200 cursor-pointer"} target="_blank">{link3}</a>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="oklch(82.8% 0.189 84.429)" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                    <a className={"hover:text-amber-400 transition-all duration-200 cursor-pointer"} target="_blank">{link4}</a>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="oklch(82.8% 0.189 84.429)" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                    <a className={"hover:text-amber-400 transition-all duration-200 cursor-pointer"} target="_blank">{link5}</a>
                </li>
            </ul>
        </div>
    )
}

export default FooterLinks;