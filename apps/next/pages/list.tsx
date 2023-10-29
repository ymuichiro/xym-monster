import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const MonstersList = dynamic(() => import('app/features/list').then((e) => e.MonstersList), {
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
        <title>Monsters List</title>
      </Head>
      {isLoaded && <MonstersList payload={router.query.signed_payload as string} />}
    </>
  );
}
