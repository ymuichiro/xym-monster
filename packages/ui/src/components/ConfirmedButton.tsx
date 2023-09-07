import { AlertDialog } from '@tamagui/alert-dialog';
import { Button } from '@tamagui/button';
import { ScrollView } from '@tamagui/scroll-view';
import { XStack, YStack } from '@tamagui/stacks';
import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

interface ConfirmedButtonProps {
  button?: {
    title?: string;
  };
  content?: {
    title?: string;
    description?: string;
    maxWidth?: number;
    onPressAccept?: () => void;
  };
  children?: React.ReactNode;
}

export function ConfirmedButton(props: ConfirmedButtonProps): JSX.Element {
  const [height, setHeight] = useState<number>(Dimensions.get('window').height);

  useEffect(() => {
    const _event = Dimensions.addEventListener('change', (e) => {
      setHeight(e.window.height);
    });
    return () => {
      _event.remove();
    };
  }, []);

  return (
    <AlertDialog native>
      <AlertDialog.Trigger asChild>
        <Button themeInverse>{props.button?.title || 'SUBMIT'}</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <AlertDialog.Content
          bordered
          elevate
          key="content"
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
          x={0}
          scale={1}
          opacity={1}
          y={0}
          width={'95%'}
          maxWidth={props.content?.maxWidth || 500}
        >
          <AlertDialog.Title>{props.content?.title}</AlertDialog.Title>
          <AlertDialog.Description>{props.content?.description}</AlertDialog.Description>
          <ScrollView showsVerticalScrollIndicator={false} style={{ maxHeight: height - 100 }}>
            <YStack space>
              {props.children}
              <XStack space="$3" justifyContent="flex-end">
                <AlertDialog.Cancel asChild>
                  <Button>Cancel</Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action asChild>
                  <Button theme="active" onPress={props.content?.onPressAccept}>
                    Accept
                  </Button>
                </AlertDialog.Action>
              </XStack>
            </YStack>
          </ScrollView>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog>
  );
}
