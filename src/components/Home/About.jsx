import Image from 'next/image';
import React from 'react';

export default function About({ aboutRef }) {
  return (
    <section
      ref={aboutRef}
      className='w-full h-full px-6 py-12 md:px-24 md:py-24 overflow-hidden'>
      <h1 className='text-heading'>Tentang Kami</h1>
      <div className='mx-auto container'>
        <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 py-12'>
          <div className='group w-full h-full'>
            <Image
              src='/images/sepatu-3.jpg'
              alt='Sepatu 3'
              width={440}
              height={580}
              className='md:w-[440px] md:h-[580px] w-auto h-auto transition-all group-hover:scale-110'
            />
          </div>
          <div>
            <p className='text-slate-900 text-xl break-words leading-loose'>
              Selamat datang di website sepatu! Kami adalah sebuah toko online
              yang menyediakan berbagai jenis sepatu untuk segala kebutuhan
              Anda. Kami berkomitmen untuk memberikan pengalaman belanja yang
              mudah, aman, dan menyenangkan bagi pelanggan kami. Di website
              kami, Anda akan menemukan berbagai macam jenis sepatu, mulai dari
              sepatu casual, sepatu olahraga, sepatu formal,sepatu gacor, dan
              banyak lagi. Kami bekerja sama dengan merek-merek terkenal di
              dunia untuk memberikan pilihan sepatu yang berkualitas dan
              terpercaya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
