import React from 'react'
import { motion } from 'framer-motion';
import { opacity, expand, text } from './anim';

import { useRouter } from 'next/router';
const routes = {
    "/": "Home",
    "/about": "About",
    "/contact": "Contact",
    "/projects": "Projects"
}


export default function Layout({children, backgroundColor}) {

    const router = useRouter();
    console.log("routes: ", routes)

    const anim = (variants, custom=null) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            custom,
            variants
        }
    }

    const nbOfColumns = 3
    return (
        <div className='page stairs z-50' style={{backgroundColor}}>
            <motion.div {...anim(opacity)} className='transition-background'/>
            <motion.p className='route' {...anim(text)}>
                {routes[router.route]}
            </motion.p>
            <div className='transition-container'>
                {
                    [...Array(nbOfColumns)].map( (_, i) => {
                        return (
                            <motion.div key={i} {...anim(expand, nbOfColumns - i)}/>
                        ) 
                    })
                }
            </div>
            {
                children
            }
        </div>
    )
}
