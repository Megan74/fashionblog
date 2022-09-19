import { FiInstagram, ImPinterest2 } from "react-icons/im";
import Link from 'next/link';


export default function Header() {


  return (

    <>       <nav className=" bg-purple-900 h-50 shadow sm:flex  sm:px-4 sm:py-3">
    <div className="flex items-center justify-between px-7 py-5 sm:p-0">

              
    <div className="flex gap-6  justify-end text-lg no-underline text-white pr-8">
        <Link href={'https://www.pinterest.fr/Mehgan7'}>
        <a className= "social cursor-pointer" ><ImPinterest2/></a></Link>
        <Link href={'https://www.instagram.com/mate__megan/'}>
    <a className= "social cursor-pointer"><FiInstagram /></a></Link>
</div>

          </div>

      </nav><header className='w-full container mx-auto'>
              <div className='flex flex-col items-center py-12'>
                  <a className='font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl' href={'/'}>
                      Welcome to my World! </a>
              </div>
          </header></>
)
}