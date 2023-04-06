import useData from '@/hooks/useData';
import Image from 'next/image';
import { useState, useEffect } from 'react';

function Loading() {
  return (
    <>
      <div>Loading</div>
    </>
  );
}
export default function Hero() {
  const { data, isLoading, isError } = useData('hero');
  const [windowWidth, setWindoWidth] = useState(null);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindoWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <section className='w-full h-full overflow-hidden px-6 py-20  md:px-24 md:py-32 bg-gradient-to-br from-[#FD8451] to-[#FFBD6F]'>
      <div className='mx-auto container'>
        {isLoading ? (
          <Loading />
        ) : (
          data?.map((item) => (
            <div
              key={item._id}
              className='w-full grid grid-cols-1 md:grid-cols-12 gap-2 items-center justify-center md:justify-between'>
              <div className='col-start-1 col-end-13 md:col-start-1 md:col-end-7'>
                <h1 className='text-5xl font-semibold capitalize text-white'>
                  {item?.title}
                </h1>
                <p className='text-slate-800 text-xl break-words mt-4'>
                  {item?.description}
                </p>
              </div>
              <div className='col-start-1 col-end-13 md:col-start-7 md:col-end-13'>
                <Image
                  src={item?.photo}
                  alt={item?.title}
                  width={900}
                  height={900}
                  style={{
                    width: `${windowWidth < 576 ? null : '100%'}`,
                    height: `${windowWidth < 576 ? null : '100%'}`,
                  }}
                  className='w-full h-full  object-cover object-center'
                />
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
