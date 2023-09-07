import { YStack } from '@tamagui/stacks';
import { BrowserQRCodeReader } from '@zxing/browser';
import { Result } from '@zxing/library';
import { useEffect, useRef, useState } from 'react';
import { Platform } from 'react-native';

import { SelectBase } from '..//components/SelectBase';

type CameraDeviceInfo = {
  id: string;
  name: string;
};

export interface QRCodeScannerWebProps {
  onRead: (result: Result) => void;
}

export function QRCodeScannerWeb(props: QRCodeScannerWebProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mountedRef = useRef<boolean>(false);
  const [devices, setDevices] = useState<CameraDeviceInfo[]>([]);
  const [currentCamera, setCurrentCamera] = useState<string | undefined>(undefined);

  const setDevicesList = async (): Promise<CameraDeviceInfo[]> => {
    const list = await BrowserQRCodeReader.listVideoInputDevices();
    const result: CameraDeviceInfo[] = [];
    for (const device of list) {
      result.push({ id: device.deviceId, name: device.label });
    }
    setDevices([...result]);
    setCurrentCamera(result[0].id);
    return result;
  };

  useEffect(() => {
    if (Platform.OS !== 'web') return;
    mountedRef.current = true;
    const codeReader = new BrowserQRCodeReader();
    setDevicesList();
    codeReader.decodeFromVideoDevice(currentCamera, videoRef.current!, function (result, _, controls) {
      if (mountedRef.current === false) {
        controls.stop();
        return;
      }
      if (typeof result !== 'undefined') {
        controls.stop();
        props.onRead(result);
      }
    });
    return function cleanup() {
      mountedRef.current = false;
    };
  }, [currentCamera]);

  if (Platform.OS !== 'web') throw new Error('QRCodeScannerWeb is only available on web');

  return (
    <YStack ai="center" padding="$4">
      <SelectBase
        style={{ maxWidth: 700 }}
        select={{ id: 'select-camera', value: currentCamera, onValueChange: setCurrentCamera }}
        items={devices.map((e) => ({ name: e.name, value: e.id }))}
      />
      <video
        style={{ width: '100%', maxWidth: '700px', borderRadius: '6px', marginTop: '1em', marginBottom: '1em' }}
        ref={videoRef}
      />
    </YStack>
  );
}
