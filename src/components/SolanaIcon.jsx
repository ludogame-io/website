import React from 'react'
// import SvgIcon from '@mui/material/SvgIcon'

const SolanaSVGPath = 'svg/solanaLogoMark.svg'

const SolanaIcon = () => {
  return (<React.Fragment>
    <img alt="solana-icon" style={{ width: '1rem', marginLeft: '0.25rem' }} src={SolanaSVGPath} />
  </React.Fragment>)
}

export default SolanaIcon
