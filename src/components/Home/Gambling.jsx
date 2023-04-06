import React from 'react';
import { CustomButton } from '..';
import Image from 'next/image';

export default function Gambling() {
  return (
    <div className='overflow-hidden w-ful h-full'>
      <CustomButton
        type='link'
        isExternal
        href='https://www.victory39.online/id/register?code=F65HCI51'
        target='_blank'>
        <Image
          src='/images/banner1.png'
          alt='banner Victory39'
          width={400}
          height={400}
          style={{ width: '100%', height: '100%' }}
          className='object-center object-cover w-full h-[95vh]'
        />
      </CustomButton>
    </div>
  );
}
