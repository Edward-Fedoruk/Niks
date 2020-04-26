import Head from 'next/head'
import MainButton from '../components/Button/Button';
import {SideButton} from '../components/Button/Button';

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