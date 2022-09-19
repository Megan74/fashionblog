import Image from 'next/image';

export const SingleArticle = ({ author, image, category, title, children }) => {
  return (
    <div className='px-4 py-24'>
      <div className='mx-auto max-w-prose'>
        <p className='block text-center text-base font-semibold uppercase tracking-wide text-white'>
          {category}
        </p>
        <h1 className='mt-2 block text-center text-3xl font-extrabold leading-8 tracking-wide text-white sm:text-4xl'>
          {title}
        </h1>
        <br />
        <Image
          className='lg:h-48 md:h-36 w-full object-cover object-center'
          src={image}
          width={920}
          height={900}
          alt='blog'
        />
        <hr />
        <br />
        <div className='flex items-center  text-white  '>
          <Image src={author.image} width={130} height={120} alt='author' />

          <div>
            <strong>{author.name}</strong>
            <br />
            <span>Fashion enthusiast</span>
          </div>
        </div>
        <article className=' text-white prose-md prose prose-indigo py-24 lg:prose-lg'>
          {children}
        </article>
        
      </div>
    </div>
  );
};
