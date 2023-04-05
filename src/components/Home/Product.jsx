import Image from 'next/image';
import React from 'react';

export default function Product({ productRef }) {
  const product = [
    {
      id: 1,
      name: 'Adidas Ultraboost',
      imageUrl: '/images/sepatu-2.png',
      description:
        'Adidas Ultraboost adalah sepatu lari yang terkenal dengan kenyamanan dan teknologi sol yang inovatif. Sol sepatu dilengkapi dengan teknologi Boost yang memberikan responsif dan penyerapan guncangan yang sangat baik saat berlari.',
    },
    {
      id: 2,
      name: 'Adidas Superstar',
      imageUrl: '/images/sepatu-4.jpg',
      description:
        'Adidas Superstar adalah sepatu retro yang klasik dan populer di kalangan penggemar sneaker. Sepatu ini memiliki desain yang simple dan icongraphic shell-toe yang terbuat dari bahan kulit.',
    },
    {
      id: 3,
      name: 'Adidas NMD',
      imageUrl: '/images/sepatu-5.jpg',
      description:
        ' Adidas NMD adalah sepatu kasual yang menggabungkan teknologi sol yang canggih dengan desain futuristik. Solnya dilengkapi dengan teknologi Boost dan midsole EVA yang memberikan kenyamanan sepanjang hari.',
    },
    {
      id: 4,
      name: 'Adidas Stan',
      imageUrl: '/images/sepatu-6.jpg',
      description:
        'Adidas Stan Smith adalah sepatu klasik yang sangat terkenal dan populer. Sepatu ini memiliki desain yang sederhana dan elegan dengan bahan dasar kulit dan logo Three Stripes di sisi sepatu.',
    },
    {
      id: 1,
      name: 'Adidas Yeezy Boost',
      imageUrl: '/images/sepatu-7.png',
      description:
        'Adidas Yeezy Boost adalah hasil kolaborasi antara Adidas dan rapper ternama Kanye West. Sepatu ini memiliki desain yang futuristik dan sangat diminati oleh penggemar sneaker. Solnya dilengkapi dengan teknologi Boost dan dilengkapi dengan detail yang khas dari brand Yeezy.',
    },
  ];
  return (
    <section
      ref={productRef}
      className='w-full h-full overflow-hidden px-6 py-12 md:px-24 md:py-24'>
      <h1 className='text-heading'>Product</h1>
      <div className='container mx-auto py-16'>
        <div className='grid grid-cols-1 items-center justify-center gap-y-12 '>
          {product.map((item, index) => (
            <>
              <div className='shadow-md shadow-indigo-400/40 rounded-b-2xl'>
                <div
                  key={index}
                  className={`group`}>
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
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
