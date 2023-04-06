import { Navbar } from 'flowbite-react';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import CustomButton from '../Button/CustomButton';
import useData from '@/hooks/useData';

export default function Header({ aboutRef, productRef }) {
  const { data, isLoading, isError } = useData('hero');
  const menuList = [
    {
      name: 'Home',
      destination: {},
    },
    {
      name: 'Tentag Kami',
      destination: aboutRef?.current,
    },
    {
      name: 'Product',
      destination: productRef?.current,
    },
  ];
  const [scrolledNav, setScrolledNav] = useState(null);
  const handlerScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 50,
      behavior: 'smooth',
    });
  };
  const listenScrollEvent = () => {
    window.scrollY > 20 ? setScrolledNav('scrolled') : setScrolledNav('');
  };
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);
  return (
    <header className={`w-full z-50 fixed ${scrolledNav}`}>
      <div className='container mx-auto'>
        <Navbar
          fluid={true}
          rounded={true}
          className='bg-transparent'>
          <Navbar.Brand
            href='/'
            className='text-white font-semibold text-2xl hover:underline hover:text-slate-900 transition-all'>
            {data?.map((item) => item.title)}
          </Navbar.Brand>
          <Navbar.Toggle className={styles.toggle} />
          <Navbar.Collapse className='px-5 py-1 ul'>
            {menuList.map((item, index) => (
              <li
                key={index}
                className='mt-2'>
                <CustomButton
                  type='button'
                  onClick={() => handlerScroll(item.destination)}
                  className='text-white font-normal text-base hover:underline hover:text-slate-900 transition-all'>
                  {item.name}
                </CustomButton>
              </li>
            ))}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
}
