import Image from 'next/image'



export default function MyImage(props) {
  return (
    <Image
      src="/images/treecode.png"
      alt="yelpcamp codebase"
      width={500}
      height={500}
    />
  )
}