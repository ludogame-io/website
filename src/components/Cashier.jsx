import React, { useState } from 'react'

import { Box, Button, Tabs, Tab } from '@mui/material'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'

const BasePanel = (props) => {
  const { index, value, ...other } = props
  return (
    <div
      role="tabpanel"
      hidden={index !== value}
      id={`cashier-tabpanel-${index}`}
      aria-labelledby={`cashier-tab-${index}`}
      {...other}
    >
    </div>
  )
}

const DepositPanel = ({ index, value, visibility }) => {
  if (!visibility) return

  return (
    <BasePanel index={index} value={value}
      sx={{
        position: 'absolute',
        border: '2px solid orange',
        backgroundColor: 'purple',
        marginTop: '3.25rem',
        marginLeft: '-6.5rem',
      }} >
      <form name="deposit_form">
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            type="number"
            endAdornment={<InputAdornment position="start">SOL</InputAdornment>}
            label="Amount"
            required={true}
          />
          <Button type="submit" variant='outlined' onClick={(e) => {e.preventDefault(); alert('submit form...')}}>Deposit</Button>
        </FormControl>
      </form>
    </BasePanel>
  )
}

const WithdrawPanel = ({ index, value, visibility }) => {
   if (!visibility) return

  return (<BasePanel index={index} value={value} >withdraw panel</BasePanel>)
}

const Cashier = () => {
  const [isVisible, setVisibility] = useState(false)
  const [tabIndex, switchTab] = useState(0)

  const handleSwitchTab = (e, newValue) => {
    console.info('::: cashier switch tab to', newValue)
    switchTab(newValue)
  }
  return (
    <>
      <Button onClick={() => setVisibility(!isVisible)}>Cashier</Button>
      <Tabs
        value={tabIndex}
        onChange={handleSwitchTab}
        aria-label='cashier-tabs'
        sx={{
          position: 'absolute',
          border: '1px solid red',
          backgroundColor: 'purple',
          marginTop: '3.25rem',
          marginLeft: '-6.5rem',
          visibility: isVisible ? 'visible' : 'hidden'
          }}
        >
        <Tab icon={<ArrowCircleDownIcon />} label='Deposit' />
        <Tab icon={<ArrowCircleUpIcon />} label='Withdraw' />
      </Tabs>
      <DepositPanel index={0} value={tabIndex} visibility={isVisible} />
      <WithdrawPanel index={1} value={tabIndex} visibility={isVisible} />
    </>
  )
}

export default Cashier
