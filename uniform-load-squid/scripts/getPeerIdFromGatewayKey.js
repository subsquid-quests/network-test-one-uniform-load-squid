import { createFromPrivKey } from 'peer-id'
import { keys } from 'libp2p-crypto'
import { readFileSync } from 'fs'

const file = readFileSync(process.argv[2])

async function main() {
	const key =  await keys.supportedKeys.ed25519.unmarshalEd25519PrivateKey((file))
	const peerId = await createFromPrivKey(key.bytes)
	console.log('Your peer ID is', peerId.toB58String())
}

main()
