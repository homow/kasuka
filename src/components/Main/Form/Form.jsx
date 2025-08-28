function Form() {
    return (
        <form className={"w-full grid grid-cols-1 gap-y-4"}>
            <div className={"flex flex-col gap-4 sm:flex-row"}>
                <label className={"basis-1/2"}>
                    <input className={"w-full rounded-sm outline-none border border-gray-300 px-4 py-2 focus:border-amber-400"} type="text" placeholder={"نام"}/>
                </label>
                <label className={"basis-1/2"}>
                    <input className={"w-full rounded-sm outline-none border border-gray-300 px-4 py-2 focus:border-amber-400"} type="text" placeholder={"ایمیل"}/>
                </label>
            </div>
            <label>
                <input className={"w-full rounded-sm outline-none border border-gray-300 px-4 py-2 focus:border-amber-400"} type="text" placeholder={"عنوان"}/>
            </label>
            <textarea placeholder={"متن"} cols="10" rows="5" className={"w-full rounded-sm resize-none border border-gray-300 px-4 py-2 focus:border-amber-400 outline-none"}></textarea>
            <button className={"px-4 py-2 max-w-max rounded-sm inline-block mx-auto bg-amber-400 hover:bg-amber-400/80 cursor-pointer transition-all duration-200"} type={"submit"}>ارسال پیام</button>
        </form>
    )
}

export default Form;