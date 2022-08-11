import * as React from 'react';
import { Link, HeadFC } from 'gatsby';
import { Page } from '../components/page';
import { SEO } from '../components/seo'

const NotFoundPage = () => {
  return (
    <Page>
      <div className="h-screen w-screen flex justify-center items-center flex-col z-50">
        <div className="px-4 text-center lg:px-[20rem] py-4">
          <h1 className="font-cursive  text-4xl lg:text-9xl z-50 ">Upps, pagina no encontrada :(</h1>
        </div>
      </div>
    </Page>
  );
};

export default NotFoundPage;

export const Head =() =><SEO title='Pagina no encontrada'/>
