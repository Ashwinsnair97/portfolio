import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

export function EmblaCarousel({ imgList }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'center', loop:  true })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className='flex flex-row  justify-between'>
            <button className="embla__prev p-8" onClick={scrollPrev}>
                <AiOutlineLeft style={{height: "50px", width: "50px"}}/>
            </button>
        <div className="embla">
            <div className="embla__viewport h-full w-full justify-center" ref={emblaRef}>
                <div className="embla__container h-full">,
                    {imgList.map((img, index) => {
                        return (
                            <div className="embla__slide flex border rounded-3xl" style={{
                                backgroundColor: "white",
                                backgroundImage: `url(${img})`,
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                            }} />
                        )
                    })}
                </div>
            </div>
        </div>
        
            <button className="embla__next p-8" onClick={scrollNext}>
                <AiOutlineRight style={{height: "50px", width: "50px"}}/>
            </button>
        </div>
    )
}