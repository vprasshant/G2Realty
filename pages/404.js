import Head from 'next/head';

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>G2Realty - 404</title>
        <meta name="description" content="G2Realty 404 Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>404 - Page Not Found</h1>
        {/* Add your static HTML content here */}
      </main>
    </div>
  );
} 