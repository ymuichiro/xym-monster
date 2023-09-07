import { ScrollView } from '@tamagui/scroll-view';
import { Sheet } from '@tamagui/sheet';
import { useState } from 'react';

interface SheetBaseProps {
  isOpen: boolean;
  onOpenChange: (e: boolean) => void;
  children: React.ReactNode;
}

export function SheetBase(props: SheetBaseProps): JSX.Element {
  const [position, setPosition] = useState(0);

  return (
    <Sheet
      modal
      open={props.isOpen}
      onOpenChange={props.onOpenChange}
      snapPoints={[90]}
      position={position}
      onPositionChange={setPosition}
      dismissOnSnapToBottom
    >
      <Sheet.Overlay />
      <Sheet.Frame>
        <Sheet.Handle backgroundColor={'#FFF'} />
        <ScrollView showsHorizontalScrollIndicator={false} paddingBottom={'$8'}>
          {props.children}
        </ScrollView>
      </Sheet.Frame>
    </Sheet>
  );
}
