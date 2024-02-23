import React from 'react'
import { Connection, clusterApiUrl, PublicKey, Transaction, TransactionInstruction } from '@solana/web3.js'

// public path
const defaultImage = 'nfts/w3i-OG-genesis.png'

const NFTCard = ({ image, properties, onClick }) => {
  const handleFreeMint = async () => {
    try {
      const connection = new Connection(clusterApiUrl('devnet'))
      const transaction = new Transaction()

      // Ajouter l'instruction de MintOGPass à la transaction
      const mintInstruction = new TransactionInstruction({
        keys: [
          { pubkey: PublicKey.default, isSigner: true, isWritable: false },
          // Ajoutez d'autres clés nécessaires ici
        ],
        programId: new PublicKey('Your_MintOGPass_Program_Id'),
        data: Buffer.from([1]), // Données spécifiques à l'instruction MintOGPass
      })

      transaction.add(mintInstruction)

      // Demander à l'utilisateur de signer la transaction avec son wallet Phantom
      const provider = window.solana
      const { blockhash } = await connection.getRecentBlockhash()
      transaction.recentBlockhash = blockhash
      transaction.feePayer = provider.publicKey
      const signedTransaction = await provider.signTransaction(transaction)
      const signature = await connection.sendRawTransaction(signedTransaction.serialize())
      console.log('MintOGPass transaction signature:', signature)

      onClick && onClick(signature) // pass event to the parent component
    } catch (error) {
      console.error('Failed to MintOGPass:', error)
    }
  }

  return (
    <div className="nft-card">
      <img src={image || defaultImage} alt="NFT" />
      <div className="properties">
        <p>{properties}</p>
      </div>
      <button onClick={handleFreeMint}>Free MINT</button>
    </div>
  )
}

export default NFTCard
