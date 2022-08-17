import React, { useEffect } from 'react';

interface Props {
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
}

export const SEO: React.FC<Props> = ({ title, description, pathname, children }) => {
  const seo = {
    title: title || 'Sara y Barti',
    description: description || 'Invitacion de boda Sara y Barti',
  };
 
  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={"https://drive.google.com/file/d/15euErZsWnz0Nli5Dwvss450vOVKwXSBz/view?usp=sharing"} />
      <meta property="og:image" content={"https://drive.google.com/file/d/15euErZsWnz0Nli5Dwvss450vOVKwXSBz/view?usp=sharing"} />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>💍</text></svg>"
      />
      {children}
    </>
  );
};
