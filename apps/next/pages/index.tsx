import dynamic from 'next/dynamic';
import Head from 'next/head';

const HomeScreen = dynamic(() => import('app/features/home/screen').then((e) => e.HomeScreen), {
  ssr: false,
  loading: () => <div>loading...</div>,
});

export default function Page() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HomeScreen />
    </>
  );
}
