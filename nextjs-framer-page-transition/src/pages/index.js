import Head from 'next/head'
import Curve from '@/components/Layout/Curve'
import Stairs from '@/components/Layout/Stairs'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
// import Tooltip from "../components/Tooltip";
// import gifUrl from "../../public/imgs/IXNp.gif"
// import gifUrl from "../../public/imgs/4SHX.gif"
import { useScrollPercentage } from 'react-scroll-percentage'
import HorizontalScrollCarousel from '@/components/HorizontalCarousel';
import ImgGrid from '@/components/ImgGrid';
import Header from '@/components/header';
import StickyCursor from '@/components/stickyCursor'
import AnimatedText from '@/components/animatedText';


export default function Home({ setGifUrl, gifUrl }) {

  const stickyElement = useRef(null);

  const [ref, percentage] = useScrollPercentage({
    threshold: 0,
  })

  const [ref2, percentage2] = useScrollPercentage({
    threshold: 0,
  })

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stairs backgroundColor={"#B0AD98"}>
        <main className="flex min-h-screen flex-col items-center justify-between text-6xl text-slate-900 bg-black overflow-clip hover:overflow-y-visible">

          <div className="flex items-end h-screen w-screen justify-center bg-white p-6">
            <span ref={ref} style={{ opacity: (0.8 - percentage) * 2 }} >
              <AnimatedText text={"JACOB"} className={"font-serif font-semibold uppercase text-10xl text-black"} />
            </span>
          </div>
          <div className='relative h-img w-full bg-white'>
            <ImgGrid />
            <div ref={ref2} className='absolute mt-80 top-3/4 text-center text-6xl z-10 sticky' style={{ opacity: (0.8 - percentage2) * 2 }}>
              {"YORKSHIRE BASED DESIGNER "}
              <span className='text-red-600' onMouseEnter={() => setGifUrl("/imgs/Ao.gif")} onMouseLeave={() => setGifUrl("")}>WORKING</span>
              {" with CLIENTS FROM ALL OVER THE "}
              <span className='text-blue-600' onMouseEnter={() => setGifUrl("/imgs/W31X.gif")} onMouseLeave={() => setGifUrl("")}>world</span>
              {" TO CREATE web designs THAT LEAVE A lasting "} <span className='text-green-600' onMouseEnter={() => setGifUrl("/imgs/Pa0.gif")} onMouseLeave={() => setGifUrl("")}>IMPRESSION</span>
            </div>
          </div>
          <HorizontalScrollCarousel />
          <div className="flex h-threequarter items-center justify-center">
            <span className="font-mono font-semibold uppercase text-neutral-500">
              Contact Us
            </span>
          </div>

        </main>
      </Stairs>
    </>
  )
}
