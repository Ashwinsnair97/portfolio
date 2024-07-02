import { FaDribbble } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';



export default function ContactUs() {
  return (
    <div className="flex relative bg-black h-threequarter w-full items-center justify-center" >
      <div className='justify-center fixed font-exo content-end' style={{ width: "100%", bottom: 0, left: 0, right: 0, height: "80vh" }}>
        <div className="w-1/2 justify-start text-left text-white" style={{paddingTop: "25vh"}}>
          <div className="width-1/2 divide-y divide-gray-100" style={{fontSize: "2vw"}}>
            <div key="contact" className="flex justify-between gap-x-8 mx-10 uppercase" style={{fontSize: "5vw", paddingTop: "1vw", paddingBottom: "1vw"}}>
              <div className="p-2">Find me on</div>
            </div>
            <div key="home" className="flex justify-between gap-x-8 mx-10 hover:font-play hover:italic hover:lowercase" style={{paddingTop: "1vw", paddingBottom: "1vw"}}>
              <Link className="p-2" href="https://dribbble.com/Saksh9" rel="noopener noreferrer" target="_blank">Dribbble</Link>
            </div>
            <div key="about" className="flex width-screen justify-between gap-x-6 mx-10 hover:font-play hover:italic hover:lowercase" style={{paddingTop: "1vw", paddingBottom: "1vw"}}>
              <Link className="p-2" href="https://www.behance.net/enthucreator" rel="noopener noreferrer" target="_blank">Behance</Link>
            </div>
            <div key="contact" className="flex width-screen justify-between gap-x-6 mx-10 hover:font-play hover:italic hover:lowercase" style={{paddingTop: "1vw", paddingBottom: "1vw"}}>
              <Link className="p-2" href="https://www.linkedin.com/in/sakshi-katiyar-17501b15b/" rel="noopener noreferrer" target="_blank">Linkedin</Link>
            </div>
          </div>
        </div>
        <div className="w-full justify-right text-right" style={{ textAlign: "-webkit-right", fontSize: "1vw" }}>
          <div className="w-1/2 text-white px-20">
            Developed by <Link className="font-bold" href="https://www.linkedin.com/in/ashwin-s-bb6652193?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" rel="noopener noreferrer" target="_blank">ASHWIN</Link>
          </div>
        </div>
      </div>
    </div>
  )
}