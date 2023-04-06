import useData from '@/hooks/useData';
import Image from 'next/image';
import React from 'react';

function Loading() {
  return (
    <>
      <div></div>
    </>
  );
}

export default function About({ aboutRef }) {
  const { data, isLoading, isError } = useData('about');
  return (
    <section
      ref={aboutRef}
      className='w-full h-full px-6 py-12 md:px-24 md:py-24 overflow-hidden'>
      <h1 className='text-heading'>Tentang Kami</h1>
      <div className='mx-auto container'>
        {isLoading ? (
          <Loading />
        ) : (
          data?.map((item) => (
            <div
              key={item._id}
              className='w-full h-full grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 py-12'>
              <div className='group w-full h-full'>
                <Image
                  src={item?.photo}
                  alt='Sepatu 3'
                  width={440}
                  height={580}
                  className='md:w-[440px] md:h-[580px] w-auto h-auto transition-all group-hover:scale-110'
                />
              </div>
              <div>
                <p className='text-slate-900 text-xl break-words leading-loose'>
                  {item?.description}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
