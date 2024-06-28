export default function ImgList ({imageList}) {
console.log("Image list: ", imageList)
    return (
        <div className="w-full bg-white">
            {imageList.map((img) => {
                return(
                    <div className="border" style={{
                        backgroundColor: "white",
                        backgroundImage: `url(${img})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        height: "35.9281vw",
                        width: "80vw",
                    }}/>
                )
            })}
           
        </div>
    )
}