import Head from 'next/head'
import Button from '../components/Button/Button';

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button text="Services" />
    </div>
  )
}

export default Home
