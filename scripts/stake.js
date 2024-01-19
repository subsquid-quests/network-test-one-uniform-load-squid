import child_process from 'child_process'
import password from '@inquirer/password'
import input from '@inquirer/input'

const duration = 180 // days, epochs are roughly x6
const amt = await input({
	message: `Enter the tSQD amount you would like to stake for ${duration} days`,
})
const pk = await password({
	message: 'Enter the private key of your tSQD wallet and press Enter to commit to staking',
	validate: k => k.length===64 ? true : 'A 64-digit hex private key is required'
})

try {
	child_process.execFileSync('docker', [
		'run',
		'-e', `STAKE_AMOUNT=${amt}`,
		'-e', `STAKE_DURATION=${duration*6}`,
		'-e', `PRIVATE_KEY=0x${pk}`,
		'-v', './query-gateway/keys/networkTestOneUniformLoad.key:/app/client.key',
		'-e', 'GATEWAY_KEY_PATH=/app/client.key',
		'subsquid/register-gateway:latest'
	], {stdio: 'inherit'})
}
catch {
	process.exit(1)
}
