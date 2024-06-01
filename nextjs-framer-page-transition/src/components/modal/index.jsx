import Link from 'next/link';

export default function Modal(props){

if(props.open) {
    return(
        <div className='absolute top-0 bottom-0 left-0 right-0 width-full height-full gap-12 p-4 z-100 font-bold bg-black text-white content-center'>
        <Link className="p-2" href="/">Home</Link>
        <Link className="p-2" href="/about">About</Link>
        <Link className="p-2" href="/contact">Contact</Link>
    </div>
    )
}
else
return null

}