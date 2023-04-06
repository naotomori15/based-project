import Head from 'next/head';
import { About, Hero, Layout, Product, Gambling } from '@/components';
import { useRef, useState, useEffect } from 'react';
import useData from '@/hooks/useData';

export default function Home() {
  const { data, isLoading, isError } = useData('gambling');

  const aboutRef = useRef(null);
  const productRef = useRef(null);
  const [windowWidth, setWindoWidth] = useState(577);
  const [isGambling, setIsGambling] = useState(null);
  const gamblingData = data?.map(({ isGambling }) => isGambling);
  useEffect(() => {
    if (data?.length > 0) {
      if (gamblingData != undefined) setIsGambling(JSON.parse(gamblingData));
    }
    const handleWindowResize = () => {
      setWindoWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [gamblingData, data?.length]);
  console.log(windowWidth);
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name='description'
          content='Website'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>

      {windowWidth < 576 ? (
        isLoading ? (
          <div className='bg-black h-[100vh]'></div>
        ) : isGambling ? (
          <Gambling />
        ) : (
          <Layout
            aboutRef={aboutRef}
            productRef={productRef}>
            <Hero />
            <About aboutRef={aboutRef} />
            <Product productRef={productRef} />
          </Layout>
        )
      ) : (
        <Layout
          aboutRef={aboutRef}
          productRef={productRef}>
          <Hero />
          <About aboutRef={aboutRef} />
          <Product productRef={productRef} />
        </Layout>
      )}
    </>
  );
}
