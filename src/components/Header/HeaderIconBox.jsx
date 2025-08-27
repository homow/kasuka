export default function HeaderIconBox({icon, text = "متن نمایشی"}) {
    return (
        <div className={`w-full py-2 sm:py-6 border border-gray-200 flex items-center justify-center flex-col gap-2 hover:border-amber-400  hover:text-amber-400 transition-all duration-300`}>
            {icon}
            <h3><a href="#">{text}</a></h3>
        </div>
    )
}
