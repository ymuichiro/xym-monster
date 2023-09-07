import { useState, useEffect } from 'react';
import { Button, Input, XStack } from 'tamagui';
import { TransactionService, NetworkType, Mosaic, TransferTransaction, MosaicTransaction, OneTouchHarvestingTransaction }from 'symbol';

export function TransferForm() {
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [mosaicId, setMosaicId] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddressChange = (event: any) => {
    setAddress(event.target.value);
  };
  const handleMessageChange = (event: any) => {
    setMessage(event.target.value);
  };
  const handleMosaicIdChange = (event: any) => {
    setMosaicId(event.target.value);
  };
  const handleAmountChange = (event: any) => {
    setAmount(event.target.value);
  };
  
  useEffect(() => {
    setAddress("TAUYF774MZWLBEUI7S2LR6BA5CYLL53QSMDVV3Y");
    setMessage("test");
    setMosaicId("72C0212E67A08BCE");
    setAmount("1");
  }, []);

  return (
    <div style={{ marginTop: '20px' }}>
      <XStack alignItems="center" space="$2">
        <label style={{ marginRight: '20px' }}>address</label>
        <Input size="$2" width="$20" borderWidth={2} value={address} onChange={handleAddressChange} />
      </XStack>
      <XStack alignItems="center" space="$2">
        <label style={{ marginRight: '20px' }}>message</label>
        <Input size="$2" width="$20" borderWidth={2} value={message} onChange={handleMessageChange} />
      </XStack>
      <XStack alignItems="center" space="$2">
        <label style={{ marginRight: '20px' }}>mosaicId</label>
        <Input size="$2" width="$20" borderWidth={2} value={mosaicId} onChange={handleMosaicIdChange} />
      </XStack>
      <XStack alignItems="center" space="$2">
        <label style={{ marginRight: '20px' }}>amount</label>
        <Input size="$2" width="$20" borderWidth={2} value={amount} onChange={handleAmountChange} />
      </XStack>
      <Button
        onPress={async () => {
        const transferTransaction = new TransferTransaction(
          NetworkType.TESTNET,
          address,
          undefined,
          undefined,
          [new Mosaic(mosaicId, BigInt(amount)), new Mosaic("173AC1E38CBAD11D", BigInt(1))],
          message
        );
        const signedPayload = await transferTransaction.sign();
        if(signedPayload != undefined) {
          TransactionService.announceTransaction("https://mikun-testnet.tk:3001", signedPayload).then((result) => {
            console.log(result)
          });
        }
      }}
      >
        Transfer
      </Button>
      <Button
        onPress={async () => {
        const mosaicTransaction = new MosaicTransaction(
          "13B00FBB13C7644E13BD786F0EA4F97820022A2606759793A5D3525A03F92A2F",
          0n,
          0,
          ["transferable"],
          'increase',
          10000n,
          NetworkType.TESTNET,
        );
        const signedPayload = await mosaicTransaction.sign();
        if(signedPayload != undefined) {
          TransactionService.announceTransaction("https://mikun-testnet.tk:3001", signedPayload).then((result) => {
            console.log(result)
          });
        }
      }}
      >
        Mosaic
      </Button>
      <Button
        onPress={async () => {
        const oneTouchHarvestingTransaction = new OneTouchHarvestingTransaction(
          "13B00FBB13C7644E13BD786F0EA4F97820022A2606759793A5D3525A03F92A2F",
          "https://mikun-testnet.tk:3001",
          NetworkType.TESTNET,
        );
        const signedPayload = await oneTouchHarvestingTransaction.sign();
        if(signedPayload != undefined) {
          TransactionService.announceTransaction("https://mikun-testnet.tk:3001", signedPayload).then((result) => {
            console.log(result)
          });
        }
      }}
      >
        Harvest
      </Button>
    </div>
  );
}
