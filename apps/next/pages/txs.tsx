import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Txs = dynamic(() => import('app/features/txs').then((e) => e.Txs), {
  ssr: false,
  loading: () => <div>loading...</div>,
});

export default function GetTxsPage() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (!router.isReady) return;
    setIsLoaded(true);
  }, [router.isReady, router.query]);
  return (
    <>
      <Head>
        <title>Monsters List</title>
      </Head>
      {isLoaded && <Txs />}
    </>
  );
}
