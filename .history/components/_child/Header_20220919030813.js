import {  ImInstagram, ImPinterest } from "react-icons/im";
import Link from 'next/link';


export default function Header() {


  return (

    <>
    <nav className="  h-22 shadow sm:flex  sm:px-4 sm:py-3">
    <div className="flex items-center justify-between px-7 py-5">          
    <div className="flex gap-6  justify-end text-lg no-underline text-white pr-20">
        <Link href={'https://www.instagram.com/mate__megan/'}>
    <a className= "social cursor-pointer"><ImInstagram size={32} round="true" /></a>
    </Link>
    <Link href={'https://pin.it/2HTbABs'}>
    <a className= "social cursor-pointer"><ImPinterest size={32} round="true" /></a>
    </Link>
    <Link href={'#sidebar'}>
    <a className= "underline font-bold text-white cursor-pointer">About me</a>
    </Link>
</div>
</div>
      </nav></>
)
}