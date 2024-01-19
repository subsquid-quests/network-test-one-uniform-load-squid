const fs = require("fs")
const wallet = require("ethereumjs-wallet").default

const pk = new Buffer.from(process.argv[2], 'hex') // replace by correct private key
const account = wallet.fromPrivateKey(pk)
const password = process.argv[3] // will be required to unlock/sign after importing to a wallet like MyEtherWallet

account.toV3(password)
	.then(value => {
		const address = account.getAddress().toString('hex')
		const file = `UTC--${new Date().toISOString().replace(/[:]/g, '-')}--${address}.json`
		fs.writeFileSync(file, JSON.stringify(value))
	})
