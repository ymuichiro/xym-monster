import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const WaitScreen = dynamic(() => import('app/features/payment/action/wait').then((e) => e.PaymentActionWait), {
  ssr: false,
  loading: () => <div>loading...</div>,
});

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
        <title>Wait</title>
      </Head>
      {isLoaded && (
        <WaitScreen
          path={router.query.path as string}
          address={router.query.address as string}
          mosaics={
            router.query.mosaics === "" ? undefined :
            JSON.parse(router.query.mosaics as string)
          }
          message={router.query.message as string}
          isEncrypt={router.query.isEncrypt === 'true' ? true : false}
        />
      )}
    </>
  );
}
