import {
  AlertDialog,
  Button,
  XStack,
  YStack,
} from '@my/ui';


interface AlertDialogProps {
  isOpen: boolean;
  title: string;
  description: string;
  onOpenChange?: () => void;
  hasAccept?: boolean;
  hasCancel?: boolean;
  acceptText?: string;
  cancelText?: string;
  onAccept?: () => void;
  onCancel?: () => void;
}


export default function AlertDialogMonster(alertDialogProps: AlertDialogProps) {
  return (
    <AlertDialog native open={alertDialogProps.isOpen} onOpenChange={alertDialogProps.onOpenChange}>
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
        >
          <YStack space>
            <AlertDialog.Title>{alertDialogProps.title}</AlertDialog.Title>
            <AlertDialog.Description>
              {alertDialogProps.description}
            </AlertDialog.Description>

            <XStack space="$3" justifyContent="flex-end">
              {alertDialogProps.hasCancel && <AlertDialog.Cancel asChild>
                <Button onPress={alertDialogProps.onCancel}>{alertDialogProps.cancelText}</Button>
              </AlertDialog.Cancel>}
              {alertDialogProps.hasAccept && <AlertDialog.Action asChild>
                <Button theme="active" onPress={alertDialogProps.onAccept}>{alertDialogProps.acceptText}</Button>
              </AlertDialog.Action>}
            </XStack>
          </YStack>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog>
  )
}