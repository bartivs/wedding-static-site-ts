import * as React from 'react';
import { HeadFC, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useIsMovil, useWindowSize } from '../helpers';
import { Page } from '../components/page';
import { SEO } from '../components/seo'

const CuentaPage = () => {
  const screenSize = useWindowSize();
  const isMovil = useIsMovil();

  return (
    <Page>
      <div className="h-screen w-screen flex justify-center items-center flex-col z-50">
        <div className="px-4 text-center lg:px-[20rem] py-4">
          <h1 className="font-cursive  text-4xl lg:text-9xl z-50 ">Cuenta Bancaria</h1>
        </div>
        <div className="pt-4 flex flex-col items-stretch gap-4 ">
          <h3>Vision Banco</h3>
          <h3 className="font-semibold">Nombre</h3>
          <p>Oscar Bartolome Valdez Sarubbi</p>
          <h3 className="font-semibold">Numero Cuenta</h3>
          <p>18935734</p>
          <h3 className="font-semibold">CI:</h3>
          <p>3702503</p>
        </div>
      </div>
    </Page>
  );
};

export default CuentaPage;

export const Head =() =><SEO title='Sara & Barti'/>