import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { wrap } from "popmotion";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    // zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
    //   zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const CarouselClick = ({imgList}) => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
//   const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  console.log("Page img: ",imgList)

  return (
    <div className="h-screen w-screen justify-center" style={{textAlign: "-webkit-center"}}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
        //   src={imgList[page]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="h-1/2 w-1/2"
          style={{
            backgroundColor: "blue",
            backgroundImage: `url(${imgList[page]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center"
          }}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
                {page == imgList.length-1? "":paginate(1)}
            } else if (swipe > swipeConfidenceThreshold) {
                {page == 0? "":paginate(-1)}
            }
          }}
        />
      </AnimatePresence>
      <div className="next" onClick={() => {page == imgList.length-1? "":paginate(1)}}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => {page == 0? "":paginate(-1)}}>
        {"‣"}
      </div>
    </div>
  );
};
