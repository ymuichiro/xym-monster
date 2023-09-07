import { YStack } from '../index';
import { useState } from 'react';
import { BalanceCurrencyCard } from '../components/BalanceCurrencyCard';
import { BalanceMosaicsCard } from '../components/BalanceMosaicsCard';
import { FavoriteActions } from '../components/FavoriteActions';
import { QRCodeScannerWeb } from '../components/QRCodeScannerWeb';
import { SheetBase } from '../components/SheetBase';

export interface WalletTabProps {
  address: string;
  networkType: 104 | 152;
  background: string;
  mosaics: { id: string; amount: number }[];
}

export function WalletTab(props: WalletTabProps): JSX.Element {
  const [sheetElement, setSheetElement] = useState<JSX.Element | null>(null);

  const handleCloseSheet = () => {
    setSheetElement(null);
  };
  const handleStartQRCodeScanner = () => {
    setSheetElement(
      <QRCodeScannerWeb
        onRead={(res) => {
          console.log(res);
          setSheetElement(null);
        }}
      />
    );
  };
  const handleOpenMyQR = () => {
    //
  };

  return (
    <YStack padding="$4" space={'$8'}>
      <BalanceCurrencyCard networkType={props.networkType} address={props.address} background={props.background} />
      <FavoriteActions onPressMyQR={handleOpenMyQR} onPressReadQR={handleStartQRCodeScanner} />
      <BalanceMosaicsCard networkType={props.networkType} address={props.address} mosaics={props.mosaics} />
      <SheetBase isOpen={Boolean(sheetElement)} onOpenChange={handleCloseSheet}>
        {sheetElement}
      </SheetBase>
    </YStack>
  );
}
