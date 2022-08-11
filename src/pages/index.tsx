import * as React from 'react';
import { HeadFC, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useIsMovil, useWindowSize } from '../helpers';
import { Page } from '../components/page';
import { SEO } from '../components/seo';

const IndexPage = () => {
  const screenSize = useWindowSize();
  const isMovil = useIsMovil();

  return (
    <Page>
      <div className="h-screen w-screen flex justify-center flex-col z-50">
        <div className='px-4 lg:px-0'>
          <div className="px-4 lg:pl-[30rem] py-4">
            <h1 className="text-left font-cursive  text-4xl lg:text-9xl z-50 ">Sara</h1>
          </div>
          <div className=" lg:px-[30vw] py-4 ">
            <h1 className="font-cursive text-center text-4xl lg:text-6xl">&</h1>
          </div>
          <div className="px-4 lg:px-[30vw] py-4">
            <h1 className="text-right  font-cursive  text-4xl lg:text-9xl ">Barti </h1>
          </div>
        </div>
        <div className="lg:px-[30vw]  py-4">
          <div>
            <h2 className="text-center py-4 ">
              Junto a nuestras familias
              <br />
              Te invitamos a celebrar nuestra boda
            </h2>
            <div className="grid grid-cols-3 py-4">
              <div className="text-center">
                <h1> 30.09</h1>
                <span>Viernes</span>
              </div>
              <div className="text-center">
                <h2>Villa Jardin</h2>
              </div>
              <div className="text-center">
                <h2>21:00</h2>
                <span>horas</span>
              </div>
            </div>
            <div className="pt-4">
              <h2 className="text-center font-cursive">Dos mil veintidos</h2>
            </div>
            <div className="pt-4">
              <Link to="/lista_regalos">
                <h2 className="text-center font-cursive hover:text-yellow-300">Lista de Regalos</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default IndexPage;

export const Head = () => <SEO title="Sara & Barti" />;
