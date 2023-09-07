import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const AnnounceScreen = dynamic(
  () => import('app/features/payment/action/announce').then((e) => e.PaymentActionAnnounce),
  {
    ssr: false,
    loading: () => <div>loading...</div>,
  }
);

export default function PaymentSendPage() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (!router.isReady) return;
    setIsLoaded(true);

    // ここに alice リダイレクト処理
    console.log('alice redirect', router.query);
  }, [router.isReady, router.query]);
  return (
    <>
      <Head>
        <title>Announce</title>
      </Head>
      {isLoaded && <AnnounceScreen payload={router.query.signed_payload as string} />}
    </>
  );
}
