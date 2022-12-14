import * as React from 'react';
import { HeadFC, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { GrMap } from '@react-icons/all-files/gr/GrMap';
import { useIsMovil, useWindowSize } from '../helpers';
import { Page } from '../components/page';
import { SEO } from '../components/seo';

const IndexPage = () => {
  const screenSize = useWindowSize();
  const isMovil = useIsMovil();

  return (
    <Page principalPage>
      <div className="flex  flex-col z-50 ">
        <h2 className="text-center  my-4">
          ¡Nos Casamos! 
        </h2>
        <div className="pt-10 px-8 lg:px-0">
          <div className="px-4  py-0 ">
            <h1 className="text-center font-cursive text-6xl lg:text-9xl z-50 ">Sara</h1>
            <div className="pl-14">
              <h3 className="text-center text-sm font-extrabold relative -top-4">GISELLE</h3>
            </div>
          </div>
          <div className="px-4 lg:px-[30vw] py-0">
            <h1 className="text-center text-6xl lg:text-9xl font-cursive">
              <span className="text-5xl relative bottom-4 left-3">& </span>
              <span className="relative left-3">Oscar</span>
            </h1>
            <div className="pl-[5rem]">
              <h3 className="text-center text-sm font-extrabold relative -top-4 left-3">BARTOLOMÉ</h3>
            </div>
          </div>
        </div>

        <div className="pt-10 px-4">
          <h2 className="text-center  ">
           Te invitamos a celebrar nuestra boda.
          </h2>
        </div>
        <div className="px-10 lg:px-[30vw]  py-4 ">
          <div className="flex items-center flex-col">
            <div className=" grid grid-cols-3 gap-4">
              <div className="px-4  py-5 self-stretch">
                <div className="h-full border-solid py-2 border-x-0 border-y-2 flex items-center justify-center px-8  border-gray-600">
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
              <div className="px-4 py-5 self-stretch">
                <div className="h-full border-solid py-2 border-x-0 border-y-2 flex items-center justify-center px-4 border-gray-600">
                  <span className="text-center text-sm">21:00 HORAS</span>
                </div>
              </div>
            </div>
            <a className="py-4 flex flex-col items-center" href="https://goo.gl/maps/uLE98M8PVKhGjHiEA">
              <GrMap className={' mb-4 '} size={30} />
              <h1 className="text-center text-3xl font-cursive">Villa Jardín - Luque</h1>
            </a>
            <div className="flex flex-col">
              <Link to="/lista_regalos" className="self-stretch link-button px-2 mt-2 ">
                Lista de Regalos
              </Link>
              <a
                href="https://docs.google.com/forms/d/1_QcGeVxQprKDqJMJc7hf-SLCI8KIG0tAEs9ueMHFn-E/"
                className="link-button px-2 self-center mt-2 "
              >
                Confirmar Asistencia
              </a>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default IndexPage;

export const Head = () => <SEO title="Sara & Barti" />;
