import { Button } from '@tamagui/button';
import { Image } from '@tamagui/image';
import { YStack } from '@tamagui/stacks';
import { H1 } from '@tamagui/text';
import { useLink } from 'solito/link';
interface AnnounceResultSheetProps {
  image: string;
  title: string;
}

/**
 * トランザクション送信完了画面
 */
export function AnnounceResultSheet(props: AnnounceResultSheetProps): JSX.Element {
  const linkProps = useLink({ href: '/' });

  return (
    <YStack ai="center" space={'$8'}>
      <Image source={{ uri: props.image, height: 250, width: 250 }} />
      <H1>{props.title}</H1>
      <Button themeInverse minWidth={200} {...linkProps}>
        CLOSE
      </Button>
    </YStack>
  );
}
