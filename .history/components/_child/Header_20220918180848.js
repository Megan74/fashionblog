import { ImGithub, ImTwitter, ImLinkedin } from "react-icons/im";
import Link from 'next/link';


export default function Header() {


  return (

    <>       <nav className=" bg-purple-900 h-50 shadow sm:flex  sm:px-4 sm:py-3">
    <div className="flex items-center justify-between px-7 py-5 sm:p-0">

       

              
    <div className="flex gap-6  justify-end text-lg no-underline text-white pr-8">
   
        <Link href={'https://github.com/Megan74'}>
        <a className= "social cursor-pointer" ><ImGithub /></a>
        </Link>
        <Link href={'https://twitter.com/techiemeggy'}>
    <a className= "social cursor-pointer"><ImTwitter /></a>
    </Link>
    <Link href={'https://www.linkedin.com/in/megan-mat/'}>
    <a className= "social cursor-pointer"><ImLinkedin /></a>
    </Link>
</div>
  
  

          </div>
          <header className='w-full container mx-auto'>
              <div className='flex flex-col items-center py-12'>
                  <a className='font-bold text-white-600 uppercase hover:text-white-500 text-5xl' href={'/'}>
                      Welcome to my World! </a>
              </div>
          </header>
      </nav></>
)
}