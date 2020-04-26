import Head from 'next/head'
import MainButton from '../components/MainButton/MainButton';
import SideButton from '../components/SideButton/SideButton';

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideButton text="Services" />
      <SideButton text="Portfolio" />
      <SideButton text="People" />
      <MainButton text="Valuate Project" />
    </div>
  )
}

export default Home;