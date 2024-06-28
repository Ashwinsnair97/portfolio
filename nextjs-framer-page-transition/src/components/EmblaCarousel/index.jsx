import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

export function EmblaCarousel({ imgList }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'center' })
    const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true)

    const onSelect = useCallback((emblaApi) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    React.useEffect(() => {
        if (!emblaApi) return

        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onSelect])
    // console.log("embla api: ", emblaApi.canScrollNext())

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const canScrollNext = useCallback(() => {
        if (emblaApi) emblaApi.canScrollNext()
    }, [emblaApi])

    const canScrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.canScrollPrev()
    }, [emblaApi])

    console.log("Can scroll prev: ", canScrollPrev)

    return (
        <div className='flex flex-row  justify-center'>
            <button className="embla__prev p-8" disabled={prevBtnDisabled} onClick={scrollPrev} style={{color: prevBtnDisabled?"white":'black'}}>
                <AiOutlineLeft style={{ height: "50px", width: "50px" }} />
            </button>
            <div className="embla border ">
                <div className="embla__viewport h-full w-full justify-center" ref={emblaRef}>
                    <div className="embla__container h-full">,
                        {imgList.map((img, index) => {
                            return (
                                <div className="embla__slide flex rounded-3xl" style={{
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

            <button className="embla__next p-8" disabled={nextBtnDisabled} onClick={scrollNext} style={{color: nextBtnDisabled?"white":'black'}}>
                <AiOutlineRight style={{ height: "50px", width: "50px" }} />
            </button>
        </div>
    )
}