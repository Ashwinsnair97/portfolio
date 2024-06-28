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
      backgroundColor: "#000000",
      // opacity: "100%",
      transition: {
        duration: 0.5
      }
    },
    close: {
      height: "10%",
      backgroundColor: "#00000000", 
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
            <Link className="p-2" href="/">
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
      <div className='justify-center font-exo' style={{width: "100%"}}>
        <AnimatePresence mode='wait'>
          {props.open ?
            <div key="header_main" className="width-full divide-y divide-gray-100 text-white" style={{fontSize: "3vw"}}>
              <div key="home" className="flex justify-between gap-x-8 py-5 mx-10 hover:font-play hover:italic hover:lowercase">
                <Link className="p-2" href="/projects" onClick={() => setTimeout(() => props.toggle(), 1500)}>PROJECTS</Link>
              </div>
              <div key="about" className="flex width-screen justify-between gap-x-6 py-5 mx-10 hover:font-play hover:italic hover:lowercase">
                <Link className="p-2" href="/about" onClick={() => setTimeout(() => props.toggle(), 1500)}>ABOUT</Link>
              </div>
              <div key="contact" className="flex width-screen justify-between gap-x-6 py-5 mx-10 hover:font-play hover:italic hover:lowercase">
                <Link className="p-2" href="mailto:katiyarsakshi1@gmail.com" rel="noopener noreferrer" target="_blank">CONTACT</Link>
              </div>
            </div>
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