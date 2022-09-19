import Image from 'next/image';
import {
  EmailShareButton,
  EmailIcon,
} from 'next-share';

import {
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from 'next-share';

import {
  WhatsappShareButton,
  WhatsappIcon,
} from 'next-share';
import {
  TwitterShareButton,
  TwitterIcon,
} from 'next-share';

import Link from 'next/link'


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


        <span><a href="/"  Back Home> </a></span>

       <div className="flex gap-6  justify-end text-lg no-underline text-white pr-8">   
<EmailShareButton
  url={'https://github.com/next-share'}
  subject={'Next Share'}
  body="body"
>
  <EmailIcon size={32} round />
</EmailShareButton>
<FacebookMessengerShareButton
  url={'https://github.com/next-share'}
  appId={''}
>
  <FacebookMessengerIcon size={32} round />
</FacebookMessengerShareButton>

<WhatsappShareButton
  url={'https://github.com/next-share'}
  title={'next-share is a social share buttons for your next React apps.'}
  separator=":: "
>
  <WhatsappIcon size={32} round />
</WhatsappShareButton>

<TwitterShareButton
  url={'https://github.com/next-share'}
  title={'next-share is a social share buttons for your next React apps.'}
>
  <TwitterIcon size={32} round />
</TwitterShareButton>
</div>  

      </div>
    </div>
  );
};


