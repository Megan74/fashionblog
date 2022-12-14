import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

const MyImage = (props) => {
  return (
    <Image
      loader={myLoader}
      src="/images/treecode.png"
      alt="yelpcamp codebase"
      width={500}
      height={500}
    />
  )
}