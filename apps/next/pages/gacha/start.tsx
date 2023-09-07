import dynamic from 'next/dynamic';
import Head from 'next/head';

const KapselToyStartScreen = dynamic(() => import('app/features/gacha/start').then((e) => e.CapselToyStart), {
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
