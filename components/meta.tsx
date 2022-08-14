import Head from 'next/head'

const Meta = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Thanasak's portfolio" />
      <meta name="author" content="Thanasak Limsila" />
      <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <meta property="og:site_name" content="Thanasak Limsila" />
      <meta name="og:title" content="Thanasak Limsila" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.thanasak.vercel.app" />
      <meta
        property="og:image"
        content="https://www.thanasak.vercel.app/public/thumbnail.png"
      />
      <title>Thanasak Limsila</title>
    </Head>
  )
}

export default Meta
