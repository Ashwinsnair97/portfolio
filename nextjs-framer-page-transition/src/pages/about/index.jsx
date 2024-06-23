import Curve from '@/components/Layout/Curve'
import Head from 'next/head'
import Stairs from '@/components/Layout/Stairs'
import { useScrollPercentage } from 'react-scroll-percentage'
import AnimatedText from '@/components/animatedText'

import HorizontalScrollCarousel from '@/components/HorizontalCarousel';
import ImgGrid from '@/components/ImgGrid';


export default function About(props) {
  const [ref, percentage] = useScrollPercentage({
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
      <Stairs backgroundColor={"#BCF366"}>

        <main className="flex min-h-screen flex-col items-center justify-between text-6xl text-slate-900 bg-black overflow-clip hover:overflow-y-visible">
          
          <div className='relative h-img w-full bg-white'>
            <ImgGrid />
            <div className="flex items-end h-screen w-screen justify-center bg-white absolute sticky top-0">
              <span ref={ref} style={{ opacity: (1.66 - percentage*2) }}>
                <AnimatedText text={"ABOUT"} className={"font-exo font-medium uppercase text-10xl text-black"} italic={"O"}/>
              </span>
            </div>
          </div>
          <div className='text-8xl text-black font-exo bg-white height-full'>
            <div className='height-full p-12 font-medium leading-normal'>
              <p>
            I am <span className='font-play italic text-red-700' onMouseEnter={()=> props.setGifUrl("/imgs/4SHX.gif")} onMouseLeave={()=> props.setGifUrl("")}>Sakshi Katiyar</span> - a Product Designer based in India.
            </p>
            <p>
            With over 5 years of experience, I have been transforming ideas 
            into beautiful and engaging products that connect the vision into customer’s emotions
            </p>
            <p>
            The journey commenced with the <span className='font-play italic  text-red-700'>Visual Design (graphics and illustration) </span>
            embodying brand guidelines and navigating meticulously through design tools towards decision-making and creating <span className='font-play italic  text-red-700' onMouseEnter={()=> props.setGifUrl("/imgs/Ao.gif")} onMouseLeave={()=> props.setGifUrl("")}>Websites, Mobile Applications and Dashboards</span>
            </p>
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
