import { Link } from 'gatsby'
import * as React from 'react'
import { Page } from '../components/page'
import { SEO } from '../components/seo'
import { useIsMovil, useWindowSize } from '../helpers'

const RegalosPage = () => {
  const screenSize = useWindowSize();
  const isMovil = useIsMovil();

  return (
    <Page>
      <div className="h-screen w-screen flex justify-center items-center flex-col z-50">
        <div className="px-4 text-center lg:px-[20rem] py-4">
          <h1 className="font-cursive  text-4xl lg:text-9xl z-50 ">Regalos</h1>
          <p className="mt-8">
            Lo más importante es tu presencia, pero si deseas entregarnos un regalo, estas son algunas opciones que
            sugerimos.
          </p>
        </div>
        <div className="pt-4 flex flex-col items-stretch gap-4 w-40">
          <Link
            to="https://www.nuevaamericana.com.py/listaregalos/157079"
            className="text-center border-solid border-2 border-gray-500 hover:border-gray-600 py-2 rounded-lg"
          >
            Nueva Americana
          </Link>
          <Link
            to="https://www.tupi.com.py/regalos_en_lista/5054/Boda-de-Sara-Miranda-y-Oscar-Bartolome-Valdez-el-30-09-2022"
            className="text-center border-solid border-2 border-gray-500 hover:border-gray-600 py-2 rounded-lg"
          >
            Tupi
          </Link>
          <Link
            to="../cuenta_bancaria"
            className="text-center border-solid border-2 border-gray-500 hover:border-gray-600 py-2 rounded-lg"
          >
            Cuenta Bancaria
          </Link>
        </div>
      </div>
    </Page>
  );
};

export default RegalosPage;

export const Head = () => <SEO title="Lista de regalos" />;
