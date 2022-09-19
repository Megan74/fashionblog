
import Link from 'next/link';



export default function Nav(){
   
    return (

        <><nav className="w-full py-4 border-t border-b bg-gray-100" x-data="{ open: false }">
    
                <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
                    <Link href="mailto:matandamegan@gmail.com"><a className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Contact me</a></Link>
                </div> 
    </nav>
    </>
        )}


