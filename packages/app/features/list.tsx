import { Button, Card, H1, H2, Paragraph, ScrollView, XStack, YStack } from '@my/ui';
import { Image } from '@tamagui/image';
import { useLayoutEffect, useState } from 'react';

interface MonsterProps {
  payload: string;
}

interface Monsters {
  no: string; // モンスター No
  reality: Reality; // モンスター のレア度
  name: string; // モンスター 名
  description: string; // モンスター 説明
  href: string; // モンスター 画像のURL ※ 画像データそのものだとちょっと重い
  isHas: boolean; // 自身がそのモンスターを持っているか否か
}

type Reality = 'common' | 'rare' | 'epic' | 'legendary';

function getRandomRarity() {
  const rarities: Reality[] = ['common', 'rare', 'epic', 'legendary'];
  const index = Math.floor(Math.random() * rarities.length);
  return rarities[index];
}

const DUMMY_RESPONSE: Monsters[] = new Array(1000).fill(null).map((_, index) => {
  return {
    no: `${index}`,
    name: `Monster ${index}`,
    description: `This is a description for Monster ${index}`,
    href: `/twitter-card.png`, // 一旦ダミー画像
    isHas: Math.random() < 0.5,
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
      <XStack justifyContent="center" space={'$4'} py={'$4'}>
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
              $gtXs={{ width: '100%' }}
              $gtSm={{ width: '50%' }}
              $gtMd={{ width: '30%' }}
              $gtLg={{ width: '20%' }}
              padding={10}
            >
              <Card
                elevate
                animation="bouncy"
                scale={1}
                hoverStyle={{ scale: 0.925 }}
                pressStyle={{ scale: 0.875 }}
                width={'100%'}
                bordered
                {...props}
              >
                <Card.Header padded>
                  <Image
                    resizeMode="contain"
                    alignSelf="center"
                    source={{
                      width: 300,
                      height: 300,
                      uri: item.href,
                    }}
                  />
                </Card.Header>
                <Card.Footer paddingLeft={'$4'} paddingRight={'$4'} paddingBottom={'$2'}>
                  <YStack maxWidth={'100%'}>
                    <Paragraph theme="alt2">{`No ${item.no.toString()}`}</Paragraph>
                    <H2>{item.name}</H2>
                    <Paragraph theme="alt1" textOverflow="ellipsis" minHeight={100}>
                      {item.description.length >= 100 ? `${item.description.slice(0, 100)}...` : item.description}
                    </Paragraph>
                    <Paragraph theme="alt2">{item.isHas ? 'availability' : 'unavailable'}</Paragraph>
                  </YStack>
                </Card.Footer>
              </Card>
            </XStack>
          ))}
      </XStack>
    </ScrollView>
  );
}
