function FooterSocial({icon, link}) {
    return (
        <a target="_blank" href={link} className={"bg-[#292929] p-2 rounded-sm flex items-center justify-center max-w-max hover:bg-amber-400 transition-all duration-200 group *:transition-all *:duration-200"}>
            {icon}
        </a>
    )
}
export default FooterSocial