import dynamic from 'next/dynamic';
import Head from 'next/head';

const KapselToyStartScreen = dynamic(() => import('app/features/start').then((e) => e.Start), {
  ssr: false,
  loading: () => <div>loading...</div>,
});

export default function GachaStartPage() {
  return (
    <>
      <Head>
        <title>XYM Monster</title>
      </Head>
      <KapselToyStartScreen />
    </>
  );
}
