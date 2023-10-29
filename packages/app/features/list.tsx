import { Button, Card, H1, H2, Paragraph, ScrollView, SheetBase, XStack, YStack } from '@my/ui';
import { Image } from '@tamagui/image';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Dimensions } from 'react-native';

interface MonsterProps {
  payload: string;
}

interface Monsters {
  no: string; // モンスター No
  reality: Reality; // モンスター のレア度
  name: string; // モンスター 名
  href: string; // モンスター 画像のURL ※ 画像データそのものだとちょっと重い
  isHas: boolean; // 自身がそのモンスターを持っているか否か
}

type Reality = 'common' | 'rare' | 'epic' | 'legendary';

function getRandomRarity() {
  const rarities: Reality[] = ['common', 'rare', 'epic', 'legendary'];
  const index = Math.floor(Math.random() * rarities.length);
  return rarities[index];
}

const DUMMY_RESPONSE: Monsters[] = new Array(20).fill(null).map((_, index) => {
  const isHas: boolean = Math.random() < 0.5;
  return {
    no: `${index}`,
    name: isHas ? `Monster ${index}` : '????',
    href: isHas ? '/twitter-card.png' : '/egg.png', // 一旦ダミー画像
    isHas: isHas,
    reality: getRandomRarity(),
  } as Monsters;
});

/**
 * 保有しているモンスターと未保有のモンスター情報を表示する。
 * 未保有のモンスターはグレーアウトとし、保有済みモンスターは明瞭に表示される
 * @param props
 * @returns
 */
export function MonstersList(props: MonsterProps) {
  const [monsters, setMonsters] = useState<Monsters[]>([]);
  const [reality, setReality] = useState<Reality>('common');
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  // モンスターの情報をサーバーより取得する
  const handleGetMonsters = async () => {
    // const response = await fetch('/api/monsters', { method: 'POST', body: JSON.stringify({ uid: 'xxxxxxx' }) });
    // setMonsters((await response.json()) as Monsters[]);
    setMonsters(DUMMY_RESPONSE);
  };

  const handleSelectReality = (key: Reality) => {
    setReality(key);
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
        {(['common', 'rare', 'epic', 'legendary'] as Reality[]).map((item, index) => (
          <Button themeInverse={reality == item} key={index} onPress={() => handleSelectReality(item)}>
            {item}
          </Button>
        ))}
      </XStack>
      {/* monsters */}
      <XStack justifyContent="space-around" flexWrap="wrap" flexDirection="row">
        {monsters
          .filter((e) => e.reality === reality)
          .map((item, index) => (
            <XStack
              key={index}
              width={'100%'}
              $gtXs={{ width: '100%' }}
              $gtSm={{ width: '50%' }}
              $gtMd={{ width: '30%' }}
              $gtLg={{ width: '20%' }}
              padding={10}
            >
              <MonsterCard {...item} onPressHandle={() => setCurrentImage(item.href)} />
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
      bordered
      opacity={item.isHas ? 1 : 0.2}
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
            uri: item.href,
          }}
        />
      </Card.Header>
      <Card.Footer paddingLeft={'$4'} paddingRight={'$4'} paddingBottom={'$2'}>
        <YStack maxWidth={'100%'}>
          <Paragraph theme="alt2">{`No ${item.no.toString()}`}</Paragraph>
          <H2>{item.name}</H2>
          <Paragraph theme="alt2">{item.isHas ? 'availability' : 'unavailable'}</Paragraph>
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
