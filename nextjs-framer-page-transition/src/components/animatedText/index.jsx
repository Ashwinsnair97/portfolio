import { motion } from "framer-motion"


export default function AnimatedText({text, className, italic}) {

    const defaultAnimations = {
        hidden: {
            opacity: 0,
            y:-500
        },
        visible: {
            opacity: 1,
            y:0,
            duration:2
        }
    }
    console.log(text)

    // fonted = 'font-cursive'

    return (
        <motion.span
            // initial="hidden"
            // animate="visible"
            // transition={{ staggerChildren: 0.25 , duration: 5, delay: 1 }}
            className={className} >
            {text.split("").map((char, i) => (
                <motion.span
                initial={{
                    opacity: 0,
                    y:-100
                }}
                animate={{
                    opacity: 1,
                    y:0,
                    transition: {
                        duration: 0.8,
                        delay: 0.2 * (text.length - i),
                        ease: [0.215, 0.61, 0.355, 1]
                    }
                }}
                className="inline-block" style={{
                    fontFamily: char == italic? 'Playfair Display': 'Exo', 
                    fontStyle: char == italic? 'italic': 'normal',
                    fontWeight: char == italic? '600': '500',
                }} variants={defaultAnimations}>{char}</motion.span>
            ))}
        </motion.span>
    )
}