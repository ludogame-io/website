import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress'
import AlertTitle from '@mui/material/AlertTitle'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const RPC_URI = 'http://127.0.0.1:8899'
const WS_URI = 'ws://127.0.0.1:8900'

const AirdropButton = ({ onClick }) => {
  const initialButtonState = {
    label: 'Airdrop 1 SOL',
    disabled: false,
    icon: null
  }

  const initialSnackState = {
    icon: <CircularProgress size="1rem" color="secondary" />,
    label: 'Please wait during process...',
    severity: 'info',
    action: false,
    autoHideDuration: undefined,
    title: 'Request Airdrop'
  }

  const [buttonState, setButtonState] = useState(initialButtonState)
  const [snackState, setSnackState] = useState(initialSnackState)
  const [open, setOpen] = useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  const requestAirdrop = async () => {
    if ("solana" in window) {
      try {
        setButtonState({ ...buttonState, disabled: true, label: 'Pending...', icon: <CircularProgress color="secondary" size="1rem" sx={{ marginRight: '0.5rem' }} /> })
        setSnackState(initialSnackState)
        setOpen(true)
        const provider = window.solana;
        const publicKey = new PublicKey(provider.publicKey.toString());
        const connection = new Connection(RPC_URI, {wsEndpoint: WS_URI}) //clusterApiUrl('devnet'));
        const signature = await connection.requestAirdrop(publicKey, 1000000000); // 1 SOL in lamports

        onClick && onClick({ eventType: 'airdrop', amount: 1000000000, signature })

        // capture when the transaction will be finalized to reactive the button
        connection.onAccountChange(
          publicKey,
          () => {
            setButtonState({ ...buttonState, disabled: false, label: initialButtonState.label })
            setSnackState({
              icon: undefined,
              label: 
                <Button 
                  size="small" 
                  variant="outlined" 
                  color="primary" 
                  href={`https://explorer.solana.com/tx/${signature}?cluster=custom`} 
                  target="_blank"
                  endIcon={<OpenInNewIcon />}
                  >
                  View on Solana Explorer
                </Button>,
              severity: 'success',
              action: undefined,
              title: 'Airdrop received',
              autoHideDuration: undefined,
            })
          },
          "finalized"
        )
        
      } catch (error) {
        console.error('Failed to request airdrop:', error);
      }
    } else {
      console.error('Phantom wallet not installed');
    }
  };

  return (
    <React.Fragment>
      <Button color="secondary" variant="contained" onClick={requestAirdrop} disabled={buttonState.disabled}>{buttonState.icon}{buttonState.label}</Button>
      <Snackbar open={open} onClose={handleClose} autoHideDuration={snackState.autoHideDuration}>
        <Alert
          onClose={handleClose}
          severity={snackState.severity}
          sx={{ width: '100%' }}
          icon={snackState.icon}
          action={snackState.action}
        >
          {snackState.title && (<AlertTitle>{snackState.title}</AlertTitle>)}
          {snackState.label}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};

export default AirdropButton;
