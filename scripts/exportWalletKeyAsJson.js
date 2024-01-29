import fs from 'fs'
import wallet from 'ethereumjs-wallet'

const pk = new Buffer.from(process.argv[2], 'hex') // supply a private key
const account = wallet.fromPrivateKey(pk)
const password = process.argv[3] // will be required to unlock/sign after importing

account.toV3(password)
	.then(value => {
		const address = account.getAddress().toString('hex')
		const file = `UTC--${new Date().toISOString().replace(/[:]/g, '-')}--${address}.json`
		fs.writeFileSync(file, JSON.stringify(value))
	})
