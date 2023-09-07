import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const GetMonster = dynamic(() => import('app/features/gacha/get-monster').then((e) => e.GetTreasure), {
  ssr: false,
  loading: () => <div>loading...</div>,
});

export default function GetMonsterPage() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (!router.isReady) return;
    setIsLoaded(true);
  }, [router.isReady, router.query]);
  return (
    <>
      <Head>
        <title>Get Monster</title>
      </Head>
      {isLoaded && <GetMonster payload={router.query.signed_payload as string} />}
    </>
  );
}
