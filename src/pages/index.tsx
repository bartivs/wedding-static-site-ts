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
    <Page principalPage>
      <div className="h-screen w-screen flex justify-center flex-col z-50">
        <div className="px-8 lg:px-0">
          <div className="px-4 lg:pl-[30rem] py-0 ">
            <h1 className="text-center font-cursive text-6xl lg:text-9xl z-50 ">Sara</h1>
            <div className="pl-14">
              <h3 className="text-center text-sm font-extrabold relative -top-4">GISELLE</h3>
            </div>
          </div>
          <div className="px-4 lg:px-[30vw] py-0">
            <h1 className="text-center text-6xl lg:text-9xl font-cursive">
              <span className="text-5xl">& </span>Oscar
            </h1>
            <div className="pl-[5rem]">
              <h3 className="text-center text-sm font-extrabold relative -top-4">BARTOLOME</h3>
            </div>
          </div>
        </div>

        <div className="py-4 px-4">
          <h2 className="text-center  ">
            Junto a nuestras familias
            <br />
            Te invitamos a celebrar nuestra boda.
          </h2>
        </div>
        <div className="lg:px-[30vw]  py-4 ">
          <div className="flex items-center flex-col">
            <div className="grid grid-cols-3 gap-4">
              <div className="px-4 h-full py-2">
                <div className="h-full border-solid border-x-0 border-y-2 flex items-center justify-center px-8 py-2 border-gray-600">
                  <div>
                    <span className="text-center">VIERNES</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <span>SEP</span>
                <h1 className="text-center font-extrabold text-3xl">30</h1>
                <span>2022 </span>
              </div>
              <div className="px-4 py-2 h-full">
                <div className="h-full border-solid border-x-0 border-y-2 flex items-center justify-center px-4 py-2 border-gray-600">
                  <div>
                    <span className="text-center text-sm">21:00 HORAS</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <h2 className="text-center font-cursive">Dos mil veintidos</h2>
            </div>
            <Link to="/lista_regalos" className="link-button px-2 self-center mt-2 ">
              Lista de Regalos
            </Link>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default IndexPage;

export const Head = () => <SEO title="Sara & Barti" />;
