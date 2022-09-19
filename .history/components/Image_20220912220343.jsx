import Image from 'next/image'



export default function MyImage() {
  return (
    <Image
      src="/images/treecode.png"
      alt="yelpcamp codebase"
      width={500}
      height={500}
    />
  )
}