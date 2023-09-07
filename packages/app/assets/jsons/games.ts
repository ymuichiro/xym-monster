import { GameTabProps } from '@my/ui';
import LogoIsekaitensei from 'app/assets/icons/logo-isekaitensei.jpg';
import LogoMosaicCollector from 'app/assets/icons/logo-mosaic-collector.webp';
import LogoTheTower from 'app/assets/icons/logo-the-tower.png';

export const GAMES_INFO: GameTabProps['items'] = [
  {
    name: 'The Tower',
    subTitle: "Why climb? Because that's where the tower is.",
    icon: LogoTheTower.src,
    link: 'https://symvolution.com/thetower/',
    description:
      'Character development type 2D looking down action game! ' +
      'There are three types of parameters: Life, Power, and Intelligence. ' +
      "The fighting style also changes depending on the character's training policy! " +
      'Collect coins in randomly generated dungeons, train your character, ' +
      'and compete with other players to set the record for the most infinite towers. ' +
      'The higher you go, the stronger the enemies become, so aim for the top while training your character. ' +
      'When you return to the city, you will be greeted by various NPC players, as well as training. ' +
      'A delegated harvester offers a great deal on gambling, ' +
      'an exchange place where you can exchange Symbol mosaics from the real world, ' +
      'a 3D museum that supports NFT-Drive and COMSA, and more... ' +
      "A game that aims to kill all the Symboler's spare time!",
  },
  {
    name: '異世界転生したら法定通貨が XYM だった件',
    subTitle: 'All-player cooperative online RPG',
    icon: LogoIsekaitensei.src,
    link: 'https://teritaris.github.io/tenxym/',
    description:
      'All-player cooperative online RPG! Some enemy HP is managed by mosaic balance, ' +
      'so you can see enemy HP by SymbolExplorer, etc. ' +
      'outside the game! This is a main net compatible game with avatar change, ' +
      'chat, on-chain bulletin board, events that change depending on the mosaic you have, ' +
      'automatic mosaic distribution with clear rewards, and mosaic exchange. ' +
      'Permanent mini-games such as poker and blackjack are normally only in-game coins, ' +
      'but during events, mosaic bets and payouts can be made without any fees.',
  },
  {
    name: 'Mosaic Collector',
    subTitle: 'A game to collect all mosaics existing in Symbol',
    icon: LogoMosaicCollector.src,
    link: '/',
    description: 'in preparation',
  },
];
