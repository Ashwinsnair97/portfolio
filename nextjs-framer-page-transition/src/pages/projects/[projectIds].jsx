import Curve from '@/components/Layout/Curve'
import Head from 'next/head'
import Stairs from '@/components/Layout/Stairs'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
import { CarouselClick } from '@/components/CarouselClick'
// import { projects } from './constants'
import { EmblaCarousel } from '@/components/EmblaCarousel'
import { cards, projects } from '@/constants'
import ContactUs from '@/components/contactUs'
import EmblaCarouselNew from '@/components/EmblaCarouselNew'
import React from 'react'
import { AnimatePresence, useCycle, motion } from 'framer-motion'

const printNormalProject = (header, setHeader, nextProject) => {
    const router = useRouter()
    return(
        <Stairs backgroundColor="#FFF">
        <main className="flex min-h-screen w-screen flex-col items-center justify-between text-slate-900 bg-black overflow-clip hover:overflow-y-visible">
            {
                (projects[header]? projects[header]["before"] : []).map((element) => {
                    return (
                        <div className='pt-60 p-20 w-screen text-black font-exo bg-white height-screen text-center'>
                            <span className='text-xl p-12 text-center justify-center w-full'> {element.header} </span>
                            <div className='w-full text-left text-4xl p-12 font-normal leading-normal'>
                                {element.description}
                            </div>
                        </div>
                    )
                })
            }
            <div className='w-full bg-white py-40'>
                <EmblaCarouselNew imgList={projects[header] ? projects[header]["imgs"] : []} />
            </div>
            {
                (projects[header] ? projects[header]["after"] : []).map((element) => {
                    return (
                        <div className='pt-60 p-20 w-screen text-black font-exo bg-white height-screen text-center'>
                            <span className='text-xl p-12 text-center justify-center w-full'> {element.header} </span>
                            <div className='w-full text-left text-4xl p-12 font-normal leading-normal'>
                                {element.description}
                            </div>
                        </div>
                    )
                })
            }
            <div className='pt-20 p-20 w-screen text-black font-exo bg-white height-screen text-center'>
                <span className='text-xl p-12 text-center justify-center w-full'> GO TO THE NEXT PROJECT </span>

            </div>
            <div className='h-screen w-screen bg-white justify-center rounded-b-10xl' style={{ textAlign: "-webkit-center" }}>
                <div
                    key={nextProject.id}
                    className="group relative h-[35.9281vw] w-[80vw] overflow-hidden bg-neutral-200 cursor-pointer"
                    style={{ border: "1px solid #555", borderRadius: "1vw" }}
                    onClick={() => {
                        router.push(nextProject.link)}}
                >
                    <div
                        style={{
                            backgroundColor: "blue",
                            backgroundImage: `url(${nextProject.next})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        className="absolute opacity-100 inset-0 z-0 transition-opacity duration-500 group-hover:opacity-0"
                    ></div>
                    <div
                        style={{
                            backgroundColor: "blue",
                            backgroundImage: `url(${nextProject.next2})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        className="absolute opacity-0 inset-0 z-0 transition-opacity duration-500 group-hover:opacity-100"
                    ></div>

                </div>
            </div>
            <div className="flex h-threequarter w-full items-center justify-center">
                <ContactUs />
            </div>
        </main>
    </Stairs>
    )
}

const printImagesProject = (header, setHeader, nextProject) => {
    const router = useRouter()
    return(
        <Stairs backgroundColor="#FFF">
        <main className="flex min-h-screen w-screen flex-col items-center justify-between text-slate-900 bg-black overflow-clip hover:overflow-y-visible">
            <div className='flex pt-40 flex-col gap-y-20 items-center w-screen justify-center text-center bg-white border' style={{ textAlign: "-webkit-center" }}>
            {(projects[header] ? projects[header]["imgs"] : []).map((img) => {
                return (
                    <div
                    style={{
                        backgroundColor: "blue",
                        backgroundImage: `url(${img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "35.9281vw",
                        width: "80vw",
                        borderRadius: "1vw",
                        border: "1px solid #555"
                    }}
                    
                ></div>
                )
            })}
            </div>
            <div className='pt-20 p-20 w-screen text-black font-exo bg-white height-screen text-center'>
                <span className='text-xl p-12 text-center justify-center w-full'> GO TO THE NEXT PROJECT</span>

            </div>
            <div className='h-screen w-screen bg-white justify-center rounded-b-10xl' style={{ textAlign: "-webkit-center" }}>
                <div
                    key={nextProject.id}
                    className="group relative h-[35.9281vw] w-[80vw] overflow-hidden bg-neutral-200 cursor-pointer"
                    style={{ border: "1px solid #555", borderRadius: "1vw" }}
                    onClick={() => {
                        router.push(nextProject.link)}}
                >
                    <div
                        style={{
                            backgroundColor: "blue",
                            backgroundImage: `url(${nextProject.next})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        className="absolute opacity-100 inset-0 z-0 transition-opacity duration-500 group-hover:opacity-0"
                    ></div>
                    <div
                        style={{
                            backgroundColor: "blue",
                            backgroundImage: `url(${nextProject.next2})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        className="absolute opacity-0 inset-0 z-0 transition-opacity duration-500 group-hover:opacity-100"
                    ></div>

                </div>
            </div>
            <div className="flex h-threequarter w-full items-center justify-center">
                <ContactUs />
            </div>
        </main>
    </Stairs>
    )
}


export default function Projects() {
    const params = useParams()
    const router = useRouter()
    const [header, setHeader] = React.useState("")

    // var header = params ? params.projectIds : "contract_commitments";
    React.useEffect(() => {
        if(params && params.projectIds!=undefined){
            setHeader(params.projectIds)
        }
      }, [params])

    const nextProject = findNextProject(header, cards);
    console.log("Header :", header, "project header :",projects[header]);
    return (
        <>
            <Head>
                <title>Projects</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Stairs backgroundColor="#FFF">
            <AnimatePresence mode='wait'>
            {(header == "")&& projects[header]!=undefined? <></>:
                (projects[header]["imageList"]?
                    <div key={header}>
                    {printImagesProject(header, setHeader, nextProject)}
                    </div>:
                    <div key={header}>
                    {printNormalProject(header, setHeader, nextProject)}
                    </div>
                )

            }
            </AnimatePresence>
            </Stairs>
        </>
    )
}

const findNextProject = (current, allCards) => {
    let position = 0;
    allCards.map((element, index) => {
        if (element.title == current) {
            if (index == (allCards.length - 1)) {
                position = 0;
            }
            else {
                position = index + 1
            }
        }
    })
    return allCards[position]
}



