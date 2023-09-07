import { X } from '@tamagui/lucide-icons';
import { Adapt, Button, Dialog, Sheet, Unspaced } from 'tamagui';

interface SheetBaseProps {
  isOpen: boolean;
  title: string;
  description: string;
  onOpenChange: (e: boolean) => void;
  children: React.ReactNode;
  contentStyle?: React.CSSProperties;
}

export function DialogBase(props: SheetBaseProps): JSX.Element {
  return (
    <Dialog modal open={props.isOpen} onOpenChange={props.onOpenChange}>
      <Adapt when="sm" platform="touch">
        <Sheet zIndex={200000} modal dismissOnSnapToBottom>
          <Sheet.Frame padding="$4" gap>
            <Adapt.Contents />
          </Sheet.Frame>
          <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        </Sheet>
      </Adapt>

      <Dialog.Portal padding={'$4'}>
        <Dialog.Overlay key="overlay" animation="quick" opacity={0.5} />

        <Dialog.Content
          bordered
          elevate
          key="content"
          animateOnly={['transform', 'opacity']}
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          style={props.contentStyle}
          gap
        >
          <Dialog.Title>{props.title}</Dialog.Title>
          <Dialog.Description>{props.description}</Dialog.Description>
          {props.children}
          <Unspaced>
            <Dialog.Close asChild>
              <Button position="absolute" top="$3" right="$3" size="$1" circular icon={X} />
            </Dialog.Close>
          </Unspaced>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}
