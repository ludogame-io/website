
const isPhantomWallet = () => window.solana?.isPhantom

const useWallet = () => {
  try {
    if ('solana' in window) {
      return window.solana
    }
    throw new Error('Solana library is not found.')
  }
  catch (err) { console.error(err) }
}

export default useWallet
export { isPhantomWallet }
