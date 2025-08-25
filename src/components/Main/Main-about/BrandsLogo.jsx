function BrandsLogo({img = ""}) {
    return (
        <div className={"min-w-30 max-w-32 h-12 grayscale-100 hover:grayscale-0 transition-all duration-300"}>
            <img className={"w-full h-full"} src={`/static/img/main/brands/${img}`} alt="img_logo"/>
        </div>
    )
}

export default BrandsLogo