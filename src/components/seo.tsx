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
    description: description || 'Invitación a nuestra boda',
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta
        name="image"
        content="https://lh3.googleusercontent.com/drive-viewer/AJc5JmT-ci_HGz2AFNCB1IBRR-rspCkLRitAroAPQgLM0ZhBOxS4xUWkZTVeKvpaOBydPjYETQbv38Q=w1920-h909"
      />
      <meta
        name="og:image"
        content="https://lh3.googleusercontent.com/drive-viewer/AJc5JmT-ci_HGz2AFNCB1IBRR-rspCkLRitAroAPQgLM0ZhBOxS4xUWkZTVeKvpaOBydPjYETQbv38Q=w1920-h909"
      />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>💍</text></svg>"
      />
      {children}
    </>
  );
};
