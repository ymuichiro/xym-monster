import { Adapt } from '@tamagui/adapt';
import { getFontSize } from '@tamagui/font-size';
import { Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons';
import { Select, SelectProps } from '@tamagui/select';
import { Sheet } from '@tamagui/sheet';
import { YStack } from '@tamagui/stacks';

export function SelectBase(props: {
  select: SelectProps;
  style?: { maxWidth?: number };
  items: { name: string; value: string }[];
}) {
  console.log("aa",props.select.id,props.select.value)
  return (
    <Select id={props.select.id} value={props.select.value} onValueChange={props.select.onValueChange} native>
      <Select.Trigger maxWidth={props.style?.maxWidth} iconAfter={ChevronDown}>
        <Select.Value placeholder="select"  />
      </Select.Trigger>

      <Adapt  when="sm" platform="touch">
        <Sheet  native modal dismissOnSnapToBottom>
          <Sheet.Frame >
            <Sheet.ScrollView >
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>

      <Select.Content zIndex={200000}>
        <Select.ScrollUpButton alignItems="center" justifyContent="center" position="relative" width="100%" height="$3">
          <YStack zIndex={10}>
            <ChevronUp size={20} />
          </YStack>
        </Select.ScrollUpButton>
        <Select.Viewport enterStyle={{ o: 0, y: -10 }} exitStyle={{ o: 0, y: 10 }}>
          <YStack  ai={"stretch"}>
            <Select.Group space="$0">
              {props.items.map((item, i) => {
                return (
                  <Select.Item index={i} key={item.name} value={item.value}>
                    <Select.ItemText>{item.name}</Select.ItemText>
                    <Select.ItemIndicator marginLeft="auto">
                      <Check size={16} />
                    </Select.ItemIndicator>
                  </Select.Item>
                );
              })}
            </Select.Group>
            {props.select.native && (
              <YStack
                position="absolute"
                right={0}
                top={0}
                bottom={0}
                alignItems="center"
                justifyContent="center"
                width={'$4'}
                pointerEvents="none"
              >
                <ChevronDown size={getFontSize((props.select.size ?? '$true') as any)} />
              </YStack>
            )}
          </YStack>
        </Select.Viewport>

        <Select.ScrollDownButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex={10}>
            <ChevronDown size={20} />
          </YStack>
        </Select.ScrollDownButton>
      </Select.Content>
    </Select>
  );
}
