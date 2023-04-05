import Image from 'next/image';
import React from 'react';

export default function Product({ productRef, data, isLoading }) {
  return (
    <section
      ref={productRef}
      className='w-full h-full overflow-hidden px-6 py-12 md:px-24 md:py-24'>
      <h1 className='text-heading'>Product</h1>
      <div className='container mx-auto py-16'>
        <div className='grid grid-cols-1 items-center justify-center gap-y-12 '>
          {data?.map((item, index) => (
            <div
              key={index}
              className='shadow-md shadow-indigo-400/40 rounded-b-2xl'>
              <div className={`group`}>
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={300}
                  height={300}
                  className='w-auto h-auto md:w-full md:h-[400px] transition-all group-hover:scale-110 object-cover object-center '
                />
              </div>
              <div
                className={`w-full h-full flex flex-col justify-start pb-24 px-8 pt-4`}>
                <h2 className='text-slate-800 text-4xl font-semibold '>
                  {item.name}
                </h2>
                <p className='text-slate-600 font-normal text-base '>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
