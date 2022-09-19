import {  ImInstagram, ImPinterest } from "react-icons/im";
import Link from 'next/link';


export default function Header() {


  return (

    <>

    <div className="flex gap-6 justify-end text-lg no-underline text-white mt-2 mr-2">
        <Link href={'https://www.instagram.com/mate__megan/'}>
    <a className= "social cursor-pointer"><ImInstagram size={30} round="true" /></a>
    </Link>
    <Link href={'https://pin.it/2HTbABs'}>
    <a className= "social cursor-pointer"><ImPinterest size={30} round="true" /></a>
    </Link>
    <Link href={'#sidebar'}>
    <a className= "underline font-bold text-white cursor-pointer">About me</a>
    </Link>
</div>
</>
)
}