import { forwardRef } from 'react';
import styles from './style.module.scss';
import Magnetic from '../magnetic';
import { color, motion } from 'framer-motion';

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

  return (
    <div className={styles.headerComponent}>
      <Magnetic>
        <motion.div 
        initial="plus"
        animate={props.open? "exit": "plus"}
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
          <div ref={ref} onClick={() => {props.toggle()}} className={styles.bounds}></div>
        </motion.div>
      </Magnetic>
    </div>
  )
}
)

export default Header