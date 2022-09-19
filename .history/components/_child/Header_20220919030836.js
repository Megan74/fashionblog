import {  ImInstagram, ImPinterest } from "react-icons/im";
import Link from 'next/link';


export default function Header() {


  return (

    <>
           
    <div className="flex gap-  justify-end text-lg no-underline text-white pr-20">
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
</>
)
}