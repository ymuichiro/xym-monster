import dynamic from 'next/dynamic';
import Head from 'next/head';

const HomeScreen = dynamic(() => import('app/features/payment/send').then((e) => e.PaymentSendScreen), {
  ssr: false,
  loading: () => <div>loading...</div>,
});

export default function PaymentSendPage() {
  return (
    <>
      <Head>
        <title>Payment</title>
      </Head>
      <HomeScreen />
    </>
  );
}
