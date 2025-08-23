import {StrictMode} from 'react'

export default function NavBar() {
    return (
        <StrictMode>
            <nav className={"flex items-center justify-between"}>
                <div><a href="https://homow.ir"><img className={"w-full"} src="/static/logo/logo.webp" alt="logo"/></a></div>
                <ul className={'flex items-center justify-between'}>
                    <li><a href="/">خانه</a></li>
                    <li><a href="">درباره ما</a></li>
                    <li><a href="">خدمات</a></li>
                    <li><a href="">نمونه کارها</a></li>
                    <li><a href="">تیم</a></li>
                    <li><a href="">لیست کشویی</a></li>
                    <li><a href="">تماس با ما</a></li>
                </ul>
                <div><a href="https://homow.ir">شروع</a></div>
            </nav>
        </StrictMode>
    )
}
