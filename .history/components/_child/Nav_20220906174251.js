
import Link from 'next/link';



export default function Nav(){
   
    return (

        <><nav className="w-full py-4 border-t border-b bg-gray-100" x-data="{ open: false }">
    
                <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
                    <Link href={'/article/post-1'}><a className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Contact</a></Link>
                    <Link href={'/article/post-3'}><a className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Fashion </a></Link>
                    <Link href={'/article/post-4'}><a  className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Travel</a></Link>
                    <Link href={'/'}><a className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Sports</a></Link>
                    <Link href={'/'}><a  className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Culture</a></Link>
                    <Link href={'/'}><a  className="hover:bg-gray-400 rounded py-2 px-4 mx-2">Science</a></Link>
                </div> 
    </nav>
    </>
        )}


