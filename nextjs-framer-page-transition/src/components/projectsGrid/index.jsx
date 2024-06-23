import gifUrl from "../../../public/imgs/4SHX.gif"
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation'
import { cards } from "@/constants";

const styler = {
    // backgroundColor: "blue",
    // backgroundImage: `url(../../../public/imgs/1.jpeg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    
    
}
export default function ProjectsGrid() {
    return (
        <div className="absolute w-full h-img px-40 flex flex-row flex-wrap z-10 content-center">
            {cards.map((card) => {
              return( 
                <div className="basis-1/3 p-8 gap-80 gap-y-80 justify-center align-center text-center" style={{textAlign: '-webkit-center'}}>
              <Card card={card} key={card.id} />
              </div>
            )})}
        </div>
    )
}

const Card = ({ card }) => {
    const router = useRouter()
    return (
      <div
        key={card.id}
        className="group relative h-[50vh] w-[50vh] overflow-hidden bg-neutral-200 justify-center rounded-3xl cursor-pointer"
        style={{border: "1px solid #555"}}
        onClick={()=> router.push(card.link) }
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

//   const cards = [
    
//     {
//       url: "/imgs/Cover_image_1.png",
//       url2: "/imgs/Hover_image_1.png",
//       link: "/projects/contract_commitments",
//       title: "Title 2",
//       id: 2,
//     },
//     {
//       url: "../imgs/Cover_image_2.png",
//       url2: "/imgs/Hover_image_2.png",
//       link: "/projects/project2",
//       title: "Title 3",
//       id: 3,
//     },
//     {
//       url: "../imgs/Cover_image_3.png",
//       url2: "/imgs/Hover_image_3.png",
//       link: "/projects/project3",
//       title: "Title 4",
//       id: 4,
//     },
//     {
//       url: "/imgs/Cover_image_4.png",
//       url2: "/imgs/Hover_image_4.png",
//       link: "/projects/project4",
//       title: "Title 5",
//       id: 5,
//     },
//       {
//         url: "/imgs/Cover_image_5.png",
//         url2: "/imgs/Hover_image_5.png",
//         link: "/projects/project5",
//         title: "Title 6",
//         id: 6,
//       },
//       {
//         url: "/imgs/Cover_image_6.png",
//         url2: "/imgs/Hover_image_6.png",
//         link: "/projects/project6",
//         title: "Title 1",
//         id: 1,
//       },
//   ];