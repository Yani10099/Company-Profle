import Head from 'next/head';

interface Metadata {
  title: string;
  description: string;
  url: string;
  image: string;
  type: string;
}

const metadata: Metadata = {
  title: 'Build software better, together',
  description: 'GitHub is where people build software. More than 100 million people use GitHub to discover, fork, and contribute to over 420 million projects.',
  url: 'https://s2lmjsk7-3000.asse.devtunnels.ms/',
  image: 'https://github.githubassets.com/assets/github-logo-55c5b9a1fe52.png',
  type: 'website',
};

const NextHead = () => (
  <Head>
    <title>{metadata.title}</title>
    <meta name="description" content={metadata.description} />
    <meta property="og:url" content={metadata.url} />
    <meta property="og:type" content={metadata.type} />
    <meta property="og:title" content={metadata.title} />
    <meta property="og:description" content={metadata.description} />
    <meta property="og:image" content={metadata.image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content={metadata.url} />
    <meta property="twitter:url" content={metadata.url} />
    <meta name="twitter:title" content={metadata.title} />
    <meta name="twitter:description" content={metadata.description} />
    <meta name="twitter:image" content={metadata.image} />
  </Head>
);

export default NextHead;