import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const TransactionsTable = ({ txs }) => {

  const [transactions, setTransactions] = useState([])

  const linkToSolanaExplorer = (sign) => (
    <Link
      to={`https://explorer.solana.com/tx/${sign}?cluster=custom`}
      target="_blank"
      >{sign.substr(0, 4)}...{sign.substr(-4)}</Link>
  )

  const renderTxRow = (txEvent) => (
    <tr key={`tx-row-${txEvent.signature}`}>
      <td style={{ textAlign: 'center' }}>{txEvent.eventType}</td>
      <td style={{ textAlign: 'center' }}>{txEvent.eventType === 'airdrop' ? 'RPC' : 'unknow(TODO)' }</td>
      <td style={{ textAlign: 'center' }}>{txEvent.eventType === 'airdrop' ? 'wallet' : 'unknow(TODO)' }</td>
      <td style={{ textAlign: 'center' }}>{linkToSolanaExplorer(txEvent.signature)}</td>
      <td style={{ textAlign: 'center' }}>{`${txEvent.amount / 1e9} SOL`}</td>
    </tr>
  )

  useEffect(() => setTransactions(txs), [txs])

  return (
    <table>
      <thead>
        <tr>
          <th>Type</th><th>From</th><th>To</th><th>Sign</th><th>Amount</th>
        </tr>
      </thead>
      <tbody>
        { transactions.map((txEvent) => renderTxRow(txEvent)) }
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={5} >{`total: ${txs.length}`}</td>
        </tr>
      </tfoot>
      {/* <caption>table legend</caption> */}
    </table>
  )
}

export default TransactionsTable
