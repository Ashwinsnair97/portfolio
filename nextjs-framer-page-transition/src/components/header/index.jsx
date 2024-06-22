import { forwardRef } from 'react';
import styles from './style.module.scss';
import Magnetic from '../magnetic';
import { color, motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Header = forwardRef(function index(props, ref) {

  const defaultAnimations = {
    plus: {
      rotate: 0,
      color: "black"
    },
    exit: {
      rotate: 135,
      color: "white",
      transition: {
        duration: 0.5
      }
    }
  }

  const headerAnimations = {
    open: {
      height: "100%",
      backgroundColor: "black",
      // opacity: "100%",
      transition: {
        duration: 0.5
      }
    },
    close: {
      height: "10%",
      // backgroundColor: "black", 
      // rotate: 135,
      // color: "white",
      // opacity:0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    // <div className={props.open ? styles.headerComponentOpen : styles.headerComponent}>
    // <AnimatePresence mode='wait'>
      <motion.div
        initial="close"
        animate={props.open ? "open" : "close"}
        variants={headerAnimations}
        className={styles.headerComponent}
      >
        
      <div className={styles.headerTop}>
        <Magnetic>
          <div className='font-exo font-normal text-black p-10'>
          <Link className="p-2" href="/projects">
            Sakshi Katiyar
            </Link>
          </div>
        </Magnetic>
        <Magnetic>
          <motion.div
            initial="plus"
            animate={props.open ? "exit" : "plus"}
            variants={defaultAnimations}

            className={styles.burger}>
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="3em"
              width="3em"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.5.5 0 01.5.5v5h5a.5.5 0 010 1h-5v5a.5.5 0 01-1 0v-5h-5a.5.5 0 010-1h5v-5A.5.5 0 018 2z"
              />
            </svg>
            <div ref={ref} onClick={() => { props.toggle() }} className={styles.bounds}></div>
          </motion.div>
        </Magnetic>
        <Magnetic>
          <div className='font-exo font-normal text-black p-10'>
            Bangalore India
          </div>
        </Magnetic>
      </div>
      <div className='width-screen justify-center'>
      <AnimatePresence mode='wait'>
        {props.open ?
          <ul role="list" className="width-screen divide-y divide-gray-100 text-5xl">
            <li key="home" className="flex width-screen justify-between gap-x-6 py-5 mx-10">
              <Link className="p-2" href="/projects" onClick={() => setTimeout(() => props.toggle(), 1500)}>Projects</Link>
            </li>
            <li key="about" className="flex justify-between gap-x-6 py-5 mx-10">
              <Link className="p-2" href="/about" onClick={() => setTimeout(() => props.toggle(), 1500)}>About</Link>
            </li>
            <li key="contact" className="flex justify-between gap-x-6 py-5 mx-10">
              <Link className="p-2" href="/contact" onClick={() => setTimeout(() => props.toggle(), 1500)}>Contact</Link>
            </li>
          </ul>
          //      <div className='relative top-0 bottom-0 left-0 right-0 width-full height-full gap-12 p-4 z-100 font-bold bg-black text-white content-center'>
          //      <Link className="p-2" href="/" onClick={() => setTimeout(()=> props.toggle(),1500)}>Home</Link>
          //      <Link className="p-2" href="/about" onClick={() => setTimeout(()=> props.toggle(),1500)}>About</Link>
          //      <Link className="p-2" href="/contact" onClick={() => setTimeout(()=> props.toggle(),1500)}>Contact</Link>
          //  </div> 
          :
          <></>
        }
        </AnimatePresence>

      </div>
      
      </motion.div>
      // </AnimatePresence>
    // </div>
  )
}
)

export default Header