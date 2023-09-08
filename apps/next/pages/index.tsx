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
      <KapselToyStartScreen 
        node={process.env.NEXT_PUBLIC_SYMBOL_NODE as string} 
        backendUrl={process.env.NEXT_PUBLIC_BACKEND as string} 
        publicSystemAddress={process.env.NEXT_PUBLIC_SYSTEM_ADDRESS as string}/>
    </>
  );
}
