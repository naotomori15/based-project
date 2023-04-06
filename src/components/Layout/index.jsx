import React from 'react';
import { Footer, Header } from '..';

export default function Layout({
  children,
  aboutRef,
  productRef,
  dataHeader,
  dataFooter,
}) {
  return (
    <>
      <Header
        aboutRef={aboutRef}
        productRef={productRef}
        data={dataHeader}
      />

      <main>{children}</main>
      <Footer data={dataFooter} />
    </>
  );
}
