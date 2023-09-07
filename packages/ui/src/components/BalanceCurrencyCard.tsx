import { Button } from '@tamagui/button';
import { Card } from '@tamagui/card';
import { Image } from '@tamagui/image';
import { H2, H4, SizableText } from '@tamagui/text';
import { useLink } from 'solito/link';

interface Props {
  networkType: 152 | 104;
  address: string;
  background?: string;
}

/**
 * view balance of a current wallet.
 */
export function BalanceCurrencyCard(props: Props): JSX.Element {
  const linkProps = useLink({
    href: '/payment/send',
  });

  return (
    <Card elevate bordered>
      <Card.Header padded>
        <H2>{props.networkType === 104 ? 'MAIN-NET' : 'TEST-NET'}</H2>
        <SizableText>{props.address}</SizableText>
        <H4>{`${(1000000000).toLocaleString()} XYM`}</H4>
      </Card.Header>
      <Card.Footer>
        <Card.Footer padded>
          <Button {...linkProps} borderRadius="$10">
            Payment
          </Button>
        </Card.Footer>
      </Card.Footer>
      <Card.Background alignItems="flex-end">
        <Image source={{ uri: props.background }} width={'100%'} height={'100%'} maxWidth={300} opacity={0.1} />
      </Card.Background>
    </Card>
  );
}
