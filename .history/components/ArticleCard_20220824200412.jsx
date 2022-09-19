import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function ArticleCard({
  title,
  description,
  slug,
  image,
  category,
  dateTime,
  readingTime,
}) {
  return (
    <div className='-m-0-auto mx-w-1280 Class
Properties
w-0	width: 0px;
w-px	width: 1px;
w-0.5	width: 0.125rem; /* 2px */
w-1	width: 0.25rem; /* 4px */
w-1.5	width: 0.375rem; /* 6px */
w-2	width: 0.5rem; /* 8px */
w-2.5	width: 0.625rem; /* 10px */
w-3	width: 0.75rem; /* 12px */
w-3.5	width: 0.875rem; /* 14px */
w-4	width: 1rem; /* 16px */
w-5	width: 1.25rem; /* 20px */
w-6	width: 1.5rem; /* 24px */
w-7	width: 1.75rem; /* 28px */
w-8	width: 2rem; /* 32px */
w-9	width: 2.25rem; /* 36px */
w-10	width: 2.5rem; /* 40px */
w-11	width: 2.75rem; /* 44px */
w-12	width: 3rem; /* 48px */
w-14	width: 3.5rem; /* 56px */
w-16	width: 4rem; /* 64px */
w-20	width: 5rem; /* 80px */
w-24	width: 6rem; /* 96px */
w-28	width: 7rem; /* 112px */
w-32	width: 8rem; /* 128px */
w-36	width: 9rem; /* 144px */
w-40	width: 10rem; /* 160px */
w-44	width: 11rem; /* 176px */
w-48	width: 12rem; /* 192px */
w-52	width: 13rem; /* 208px */
w-56	width: 14rem; /* 224px */
w-60	width: 15rem; /* 240px */
w-64	width: 16rem; /* 256px */
w-72	width: 18rem; /* 288px */
w-80	width: 20rem; /* 320px */
w-96	width: 24rem; /* 384px */
w-auto	width: auto;
w-1/2	width: 50%;
w-1/3	width: 33.333333%;
w-2/3	width: 66.666667%;
w-1/4	width: 25%;
w-2/4	width: 50%;
w-3/4	width: 75%;
w-1/5	width: 20%;
w-2/5	width: 40%;
w-3/5	width: 60%;
w-4/5	width: 80%;
w-1/6	width: 16.666667%;
w-2/6	width: 33.333333%;
w-3/6	width: 50%;
w-4/6	width: 66.666667%;
w-5/6	width: 83.333333%;
w-1/12	width: 8.333333%;
w-2/12	width: 16.666667%;
w-3/12	width: 25%;
w-4/12	width: 33.333333%;
w-5/12	width: 41.666667%;
w-6/12	width: 50%;
w-7/12	width: 58.333333%;
w-8/12	width: 66.666667%;
w-9/12	width: 75%;
w-10/12	width: 83.333333%;
w-11/12 flex flex-col px-3'>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            <div className='p-4 md:w-1/3'>
              <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                <Link href={`/article/${slug}`} ><a><Image
                  className='lg:h-48 md:h-36 w-full object-cover object-center hover:opacity-75 cursor-pointer'
                  src={image}
                  width={920}
                  height={900}
                  alt='blog'
                /></a></Link>
                <div className='p-6'>
                  <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
                    {category}
                  </h2>
                  <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                    {title}
                  </h1>
                  <p className='leading-relaxed mb-3'>{description}</p>
                  <div className='flex items-center flex-wrap '>
                    <a
                      href={`/article/${slug}`}
                      className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'
                    >
                      Read More
                      <svg
                        className='w-4 h-4 ml-2'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth='2'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path d='M5 12h14'></path>
                        <path d='M12 5l7 7-7 7'></path>
                      </svg>
                    </a>
                    <span className='text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
                      {readingTime}
                    </span>
                    <span className='text-gray-400 inline-flex items-center leading-none text-sm'>
                      <svg
                        className='w-4 h-4 mr-1'
                        stroke='currentColor'
                        strokeWidth='2'
                        fill='none'
                        strokeLinecap='round'
                        strokeinejoin='round'
                        viewBox='0 0 24 24'
                      >
                        <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                      </svg>
                      {dateTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
