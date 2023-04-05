import React from 'react';
import { Footer, Header } from '..';

export default function Layout({ children, aboutRef, productRef }) {
  return (
    <>
      <Header
        aboutRef={aboutRef}
        productRef={productRef}
      />

      <main>{children}</main>
      <Footer />
    </>
  );
}
