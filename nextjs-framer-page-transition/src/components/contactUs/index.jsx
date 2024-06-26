import { FaDribbble } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';



export default function ContactUs(){
    return(
    <div className='justify-center font-exo' style={{width: "100%"}}>
    <div className="w-1/2 justify-start text-left text-white">
        <div className="width-1/2 divide-y divide-gray-100 text-4xl">
        <div key="contact" className="flex justify-between text-8xl gap-x-8 py-20 mx-10">
                <Link className="p-2" href="/projects" onClick={() => setTimeout(() => props.toggle(), 1500)}>Find me on</Link>
              </div>
              <div key="home" className="flex justify-between gap-x-8 py-5 mx-10">
                <Link className="p-2" href="/projects" onClick={() => setTimeout(() => props.toggle(), 1500)}>Dribbble</Link>
              </div>
              <div key="about" className="flex width-screen justify-between gap-x-6 py-5 mx-10">
                <Link className="p-2" href="/about" onClick={() => setTimeout(() => props.toggle(), 1500)}>Medium</Link>
              </div>
              <div key="contact" className="flex width-screen justify-between gap-x-6 py-5 mx-10">
                <Link className="p-2" href="/contact" onClick={() => setTimeout(() => props.toggle(), 1500)}>Linkedin</Link>
              </div>
            </div>
    </div>
    <div className="w-full justify-right text-right" style={{textAlign: "-webkit-right"}}>
        <div className="w-1/2 text-white text-xl px-20">
            Developed by <span className="font-bold">ASHWIN</span>
        </div>
    </div>
    </div>
    )
}