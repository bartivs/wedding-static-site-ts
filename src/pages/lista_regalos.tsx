import { Link } from 'gatsby';
import * as React from 'react';
import { Page } from '../components/page';
import { SEO } from '../components/seo';
import { useIsMovil, useWindowSize } from '../helpers';

const RegalosPage = () => {
  const screenSize = useWindowSize();
  const isMovil = useIsMovil();

  return (
    <Page>
      <div className="h-screen w-screen flex  items-center flex-col z-50">
        <div className="px-4 text-center lg:px-[20rem] py-4">
          <h1 className="text-4xl z-50 mb-10">Regalos</h1>
          <p className="my-8 lg:text-lg">
            Lo más importante es tu presencia, pero si deseas entregarnos un regalo, estas son algunas opciones que
            sugerimos.
          </p>
        </div>
        <div className="pt-4 flex flex-col items-stretch gap-4 w-40">
          <a href="https://www.nuevaamericana.com.py/listaregalos/157079" className="link-button">
            Nueva Americana
          </a>
          <a
            href="https://www.tupi.com.py/regalos_en_lista/5054/Boda-de-Sara-Miranda-y-Oscar-Bartolome-Valdez-el-30-09-2022"
            className="link-button"
          >
            Tupi
          </a>
          <Link to="/cuenta_bancaria" className="link-button">
            Deposito Bancario
          </Link>
        </div>
      </div>
    </Page>
  );
};

export default RegalosPage;

export const Head = () => <SEO title="Lista de regalos" />;
