import { YGroup } from '@tamagui/group';
import { ListItem } from '@tamagui/list-item';
import { Currency } from '@tamagui/lucide-icons';
import { Separator } from '@tamagui/separator';

interface Props {
  networkType: 152 | 104;
  address: string;
  mosaics: {
    id: string;
    amount: number;
  }[];
}

/**
 * view balance of a current wallet.
 */
export function BalanceMosaicsCard(props: Props): JSX.Element {
  return (
    <YGroup bordered size="$5" separator={<Separator />}>
      {props.mosaics.map((mosaic, index) => {
        return (
          <YGroup.Item key={index}>
            <ListItem hoverTheme pressTheme title={mosaic.id} subTitle={mosaic.amount.toString()} icon={Currency} />
          </YGroup.Item>
        );
      })}
    </YGroup>
  );
}
