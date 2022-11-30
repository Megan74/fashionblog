import {  ImInstagram, ImPinterest } from "react-icons/im";
import Link from 'next/link';


export default function Header() {


  return (

    <>

    <div className="flex gap-6 justify-end text-lg no-underline text-white mt-3 mr-9">
        <Link href={'https://www.instagram.com/mate__megan/'}>
    <a className= "social cursor-pointer"><ImInstagram size={26} round="true" /></a>
    </Link>
    <Link href={'https://pin.it/2HTbABs'}>
    <a className= "social cursor-pointer"><ImPinterest size={26} round="true" /></a>
    </Link>
    <Link href={'#sidebar'}>
    <a className= "underline font-bold text-white cursor-pointer">About me</a>
    </Link>
</div>
<script src="https://cdn.commoninja.com/sdk/latest/commonninja.js" defer></script>
<div class="commonninja_component pid-72cfef0c-c962-4e36-8af7-1f5c0dffec79"></div>
</>
)
}