import '@/styles/globals.css'
import { AnimatePresence, useCycle, motion } from 'framer-motion'
import Link from 'next/link';
import '@/styles/styles.scss';
import { useRef, useState } from "react";
import Header from '@/components/header';
import StickyCursor from '@/components/stickyCursor'


export default function App({ Component, pageProps, router }) {


    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = "100vw";

    const [gifUrl, setGifUrl] = useState("")
    const stickyElement = useRef(null);
    // const { left, top, Bheight, Bwidth } = stickyElement.current.getBoundingClientRect();

    //center position of the stickyElement
    // const center = {x: left + Bwidth / 2, y: top + Bheight / 2}

    const sidebar = {
        open: {
            clipPath: `circle(100vw at 50% 13%)`,
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        },
        closed: {
            clipPath: "circle(0.001px at 50% 13%)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
              }
        }
    };


    return (
        <div className='overscroll-y-auto'>
            <div className='absolute flex-auto gap-2 p-4 z-10 sticky top-0 font-bold bg-transparent mix-blend-exclusion focus:rotate-45'>
                <Link className="p-2" href="/">Home</Link>
                <Link className="p-2" href="/about">About</Link>
                <Link className="p-2" href="/contact">Contact</Link>
            </div>

            <div className='relative top-0 z-0'>
                <Header ref={stickyElement} open={isOpen} toggle={() => toggleOpen()} />
                <StickyCursor stickyElement={stickyElement} gifUrl={gifUrl} />
                <motion.div
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    ref={containerRef}
                    className="fixed top-0 left-0 bottom-0 block w-screen h-screen bg-black" variants={sidebar} />
                <AnimatePresence mode='wait'>
                        <Component key={router.route} {...pageProps} setGifUrl={setGifUrl} />
                    </AnimatePresence>
            </div>
        </div>
    )
}
