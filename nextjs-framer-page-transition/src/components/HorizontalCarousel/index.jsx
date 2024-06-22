import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'


export default function HorizontalScrollCarousel() {
  
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
    console.log(scrollYProgress)
  
    const x = useTransform(scrollYProgress, [0, 1], ["72%", "-72%"]);
    console.log(x)
    return (
      <section ref={targetRef} className="relative h-[800vh] w-[100vw] ">
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-white rounded-b-10xl">
          <div className="relative text-10xl">
            W<span className="font-play italic">O</span>RK
          </div>
          <motion.div style={{ x }} className="absolute flex gap-28 z-10">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
    );
  };


  
  const Card = ({ card }) => {
    const router = useRouter()
    return (
      <div
        key={card.id}
        className="group relative h-[80vh] w-[80vh] overflow-hidden bg-neutral-200 rounded-3xl cursor-pointer"
        style={{border: "1px solid #555"}}
        onClick={()=> router.push('/about') }
      >
        <div
          style={{
            backgroundColor: "blue",
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute opacity-100 inset-0 z-0 transition-opacity duration-500 group-hover:opacity-0"
        ></div>
        <div
          style={{
            backgroundColor: "blue",
            backgroundImage: `url(${card.url2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute opacity-0 inset-0 z-0 transition-opacity duration-500 group-hover:opacity-100"
        ></div>
        {/* <div className="absolute inset-0 z-10 grid place-content-center">
          <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
            {card.title}
          </p>
        </div> */}
      </div>
    );
  };
  
  
  
  const cards = [
    
    {
      url: "/imgs/Cover_image_1.png",
      url2: "/imgs/Hover_image_1.png",
      title: "Title 2",
      id: 2,
    },
    {
      url: "../imgs/Cover_image_2.png",
      url2: "/imgs/Hover_image_2.png",
      title: "Title 3",
      id: 3,
    },
    {
      url: "../imgs/Cover_image_3.png",
      url2: "/imgs/Hover_image_3.png",
      title: "Title 4",
      id: 4,
    },
    {
      url: "/imgs/Cover_image_4.png",
      url2: "/imgs/Hover_image_4.png",
      title: "Title 5",
      id: 5,
    },
      {
        url: "/imgs/Cover_image_5.png",
        url2: "/imgs/Hover_image_5.png",
        title: "Title 6",
        id: 6,
      },
      {
        url: "/imgs/Cover_image_6.png",
        url2: "/imgs/Hover_image_6.png",
        title: "Title 1",
        id: 1,
      },
  ];