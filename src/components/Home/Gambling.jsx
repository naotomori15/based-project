import React from 'react';
import { CustomButton } from '..';
import Image from 'next/image';
import useData from '@/hooks/useData';

export default function Gambling() {
  const { data, isLoading, isError } = useData('gambling');
  console.log(data);
  return (
    <>
      {data.map((item) => (
        <div
          key={item._id}
          className='overflow-hidden w-ful h-[100vh]'>
          <CustomButton
            type='link'
            isExternal
            href={item.url}
            target='_blank'>
            <Image
              src={item.photo}
              alt='banner Victory39'
              width={400}
              height={400}
              style={{ width: '100%', height: '100%' }}
              className='object-center object-cover w-full h-[95vh]'
            />
          </CustomButton>
        </div>
      ))}
    </>
  );
}
