import gifUrl from "../../../public/imgs/4SHX.gif"
import Image, { StaticImageData } from 'next/image';

const styler = {
    // backgroundColor: "blue",
    // backgroundImage: `url(../../../public/imgs/1.jpeg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
}
export default function ImgGrid() {
    return (
        <div className="absolute grid h-imgdiv w-full grid-cols-8 gap-4 z-20 my-full">
            <div style={styler} className="col-start-6 h-24">
                <Image src={gifUrl} alt="Tooltip GIF" height={300} width={300} />
            </div>
            <div style={styler} className="col-start-4 h-24">
                <Image src={gifUrl} alt="Tooltip GIF" height={300} width={300} />
            </div>
            <div style={styler} className="col-start-2 col-span-4 h-24">
                <Image src={gifUrl} alt="Tooltip GIF" height={300} width={300} />
            </div>
            <div style={styler} className="col-start-5 h-24">
                <Image src={gifUrl} alt="Tooltip GIF" height={300} width={300} />
            </div>
            <div style={styler} className="col-end-8 h-24">
                <Image src={gifUrl} alt="Tooltip GIF" height={300} width={300} />
            </div>
            <div style={styler} className="col-start-3 h-24">
                <Image src={gifUrl} alt="Tooltip GIF" height={300} width={300} />
            </div>
        </div>
    )
}