import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero() {
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
  console.log(windowWidth);
  return (
    <section className='w-full h-full overflow-hidden px-6 py-20  md:px-32 md:py-24 bg-gradient-to-br from-[#FD8451] to-[#FFBD6F]'>
      <div className='w-full flex flex-wrap md:flex-nowrap gap-2 items-center justify-center'>
        <div>
          <h1 className='text-5xl font-semibold capitalize text-white'>
            Sneakers
          </h1>
          <p className='text-slate-800 text-xl break-words mt-4'>
            Kenali kualitas sneaker anda, beli dengan kualitas yang gacor. Pilih
            sneaker yang cocok, nyaman, dan dengan brand terpercaya
          </p>
        </div>
        <Image
          src='/images/sepatu-1.png'
          alt='Sepatu 1'
          width={900}
          height={900}
          style={{
            width: `${windowWidth < 576 ? 'auto' : ''}`,
            height: `${windowWidth < 576 ? 'auto' : ''}`,
          }}
          className='w-full h-full object-cover object-center'
        />
      </div>
    </section>
  );
}
