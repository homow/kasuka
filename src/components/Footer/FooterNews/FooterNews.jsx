function FooterNews() {
    return (
        <div className={"space-y-3"}>
            <h4 className={"font-dana-bl"}>خبرنامه</h4>
            <p className={"text-sm pr-2"}>با این حال ، هیچ یک از چیزهایی که من می خوانم تقصیر بزرگ ما نخواهد بود</p>
            <label className={"flex flex-row items-center bg-white rounded-sm overflow-hidden"}>
                <input className={"text-black p-2 focus:outline-amber-400 grow"} type="email"/>
                <button className={"text-black bg-amber-400 p-2 hover:opacity-80 cursor-pointer"}>دنبال کردن</button>
            </label>
        </div>
    )
}

export default FooterNews;