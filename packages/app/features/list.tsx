import { Button, Card, H1, H2, Paragraph, ScrollView, SheetBase, XStack, YStack } from '@my/ui';
import { Image } from '@tamagui/image';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { useRouter } from 'solito/router';
import { getActiveNode } from 'app/services/common';
import AlertDialogMonster from '../components/AlertDialog';

interface ListProps {
  publicKey: string;
}

interface Monsters {
  no: string; // モンスター No
  rarity: Reality; // モンスター のレア度
  name: string; // モンスター 名
  // href: string; // モンスター 画像のURL ※ 画像データそのものだとちょっと重い
  metalId: string;
  isHas: boolean; // 自身がそのモンスターを持っているか否か
  amount: number | undefined; // そのモンスターの保有数
  mosaicId: string; // モザイクID
}

type Reality = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

function getRandomRarity() {
  const rarities: Reality[] = ['common', 'uncommon', 'rare', 'epic', 'legendary'];
  const index = Math.floor(Math.random() * rarities.length);
  return rarities[index];
}

/* const DUMMY_RESPONSE: Monsters[] = new Array(20).fill(null).map((_, index) => {
  const isHas: boolean = Math.random() < 0.5;
  return {
    no: `${index}`,
    name: isHas ? `Monster ${index}` : '????',
    href: isHas ? 'https://hideyoshi.mydns.jp:3001/content/metal/FeGjv3X5Ytx5ewbRcotzjeru4oZU7dZCDxGqUM6FvSXXKV' : '/egg.png', // 一旦ダミー画像
    isHas: isHas,
    rarity: getRandomRarity(),
  } as Monsters;
}); */

/**
 * 保有しているモンスターと未保有のモンスター情報を表示する。
 * 未保有のモンスターはグレーアウトとし、保有済みモンスターは明瞭に表示される
 * @param props
 * @returns
 */
export function MonstersList(props: ListProps) {
  const [monsters, setMonsters] = useState<Monsters[]>([]);
  const [rarity, setRarity] = useState<Reality>('common');
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [dialogMessage, setDialogMessage] = useState<string>('');

  const router = useRouter();

  // モンスターの情報をサーバーより取得する
  const handleGetMonsters = async () => {
    const node = await getActiveNode();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ publicKey: props.publicKey, node, network: 104 }),
    };
    const response = await fetch('/api/gacha/monsters', options);
    const monsters = await response.json();
    if(monsters.error) {
      setIsDialogOpen(true);
      setDialogMessage(monsters.error);
    } else {
      setMonsters(monsters as Monsters[]);
    }
    // setMonsters(DUMMY_RESPONSE);
  };

  const handleSelectReality = (key: Reality) => {
    setRarity(key);
  };

  useLayoutEffect(() => {
    if (monsters.length === 0) {
      handleGetMonsters();
    }
  }, []);

  return (
    <ScrollView
      f={1}
      padding={'$4'}
      alignItems="center"
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <AlertDialogMonster
        isOpen={isDialogOpen}
        hasAccept={true}
        hasCancel={false}
        title="Alert"
        description={dialogMessage}
        acceptText="HOMEに戻る"
        onAccept={() => router.push({
          pathname: '/',
        })}
      />
      <XStack jc="flex-end" gap={10}>
        <Paragraph>
          <a href="/">Home</a>
        </Paragraph>
        <Paragraph>
          <a href="/get">😈 Get Monster</a>
        </Paragraph>
      </XStack>
      {/* title */}
      <H1
        style={{
          color: '#ACB6E5',
          background: '-webkit-linear-gradient(0deg, #ACB6E5, #86FDE8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: 1.1,
          textAlign: 'center',
        }}
      >
        XYM Monsters 😈 Book
      </H1>
      <Paragraph theme="alt1" size="$3" marginTop="$3" textAlign="center">
        What will happen to those who collect all the XYM Monsters? Now, collect them!
      </Paragraph>
      {/* actions panel */}
      <XStack justifyContent="center" flexWrap="wrap" gap={'$4'} py={'$4'}>
        {(['common', 'uncommon', 'rare', 'epic', 'legendary'] as Reality[]).map((item, index) => (
          <Button themeInverse={rarity == item} key={index} onPress={() => handleSelectReality(item)}>
            {item}
          </Button>
        ))}
      </XStack>
      {/* monsters */}
      <XStack justifyContent="space-around" flexWrap="wrap" flexDirection="row">
        {monsters
          .filter((e) => e.rarity === rarity)
          .map((item, index) => (
            <XStack
              key={index}
              width={'100%'}
              $gtXs={{ width: '100%' }}
              $gtSm={{ width: '50%' }}
              $gtMd={{ width: monsters.filter((e) => e.rarity === rarity).length < 5 ? '50%' : '30%' }}
              $gtLg={{ width: monsters.filter((e) => e.rarity === rarity).length < 5 ? '50%' : '20%' }}
              padding={10}
            >
              <MonsterCard {...item} onPressHandle={() => setCurrentImage(item.metalId)} />
            </XStack>
          ))}
      </XStack>
      {!!currentImage && (
        <SheetBase isOpen={!!currentImage} onOpenChange={() => setCurrentImage(null)}>
          <ViewModal href={currentImage} />
        </SheetBase>
      )}
    </ScrollView>
  );
}

function MonsterCard(item: Monsters & { onPressHandle: () => void }): JSX.Element {
  const [width, setWidth] = useState<number>(100);

  return (
    <Card
      elevate
      animation="bouncy"
      scale={1}
      hoverStyle={{ scale: 0.925 }}
      pressStyle={{ scale: 0.875 }}
      width={'100%'}
      minWidth={200}
      bordered
      opacity={item.amount == 0 || item.amount == undefined ? 0.2 : 1}
      disabled={!item.isHas}
      onLayout={(e) => setWidth(e.nativeEvent.layout.width)}
      onPress={item.onPressHandle}
      padding={0}
    >
      <Card.Header padding={0}>
        <Image
          resizeMode="contain"
          alignSelf="center"
          source={{
            width: width < 300 ? width : 300,
            height: 300,
            uri: `./monsters/${item.metalId}.png`,
          }}
        />
      </Card.Header>
      <Card.Footer paddingLeft={'$4'} paddingRight={'$4'} paddingBottom={'$2'}>
        <YStack maxWidth={'100%'}>
          <Paragraph theme="alt2">{`No ${item.no.toString()}`}</Paragraph>
          <H2>{item.name}</H2>
          <Paragraph theme="alt2">{item.amount == undefined ? 'unavailable' : `${item.amount} : ${item.mosaicId}`}</Paragraph>
        </YStack>
      </Card.Footer>
    </Card>
  );
}

interface ViewModalProps {
  href: string;
}

function ViewModal(props: ViewModalProps): JSX.Element {
  const [width, setWidth] = useState<number>(Dimensions.get('window').width);
  const [height, setHeight] = useState<number>(Dimensions.get('window').height);

  useEffect(() => {
    const _wevent = Dimensions.addEventListener('change', (e) => {
      setWidth(e.window.width);
    });
    const _hevent = Dimensions.addEventListener('change', (e) => {
      setHeight(e.window.height);
    });
    return () => {
      _wevent.remove();
      _hevent.remove();
    };
  }, []);

  return (
    <YStack>
      <Image
        resizeMode="contain"
        alignSelf="center"
        width="100%"
        height="100%"
        maxWidth={800}
        source={{ uri: props.href, width: width, height: height / 2 }}
      />
    </YStack>
  );
}
