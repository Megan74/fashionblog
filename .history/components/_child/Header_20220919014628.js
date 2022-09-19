import {  ImInstagram, ImPinterest } from "react-icons/im";
import Link from 'next/link';


export default function Header() {


  return (

    <>
    <nav className=" bg-purple-700 h-22 shadow sm:flex  sm:px-4 sm:py-3">
    <div className="flex items-center justify-between px-7 py-5 sm:p-0">          
    <div className="flex gap-6  justify-end text-lg no-underline text-white pr-20">
        <Link href={'https://www.instagram.com/mate__megan/'}>
    <a className= "social cursor-pointer"><ImInstagram size={32} round /></a>
    </Link>
    <Link href={'https://pin.it/2HTbABs'}>
    <a className= "social cursor-pointer"><ImPinterest size={32} round /></a>
    </Link>
</div>
          </div>
          <header className='w-full container mx-auto'>
              <div className='flex flex-col items-center py-12'>
                  <a className='font-bold text-white uppercase hover:text-white text-2xl' href={'/'}>
                      Welcome to my World! </a>
              </div>
       
          </header>
          <Link href={'#sidebar'}>
    <a className= " underline font-bold text-white cursor-pointer py-7"> About me</a>
    </Link>
      </nav></>
)
}