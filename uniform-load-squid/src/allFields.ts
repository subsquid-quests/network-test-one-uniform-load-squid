// evm-processor fields selections for all existing fields

export const allTransactionFields = {
	gas: true,
	gasPrice: true,
	maxFeePerGas: true,
	maxPriorityFeePerGas: true,
	input: true,
	nonce: true,
	value: true,
	v: true,
	r: true,
	s: true,
	yParity: true,
	chainId: true,
	gasUsed: true,
	cumulativeGasUsed: true,
	effectiveGasPrice: true,
	contractAddress: true,
	type: true,
	status: true,
	sighash: true
}

export const allLogFields = {
	transactionHash: true
}

export const allTraceFields = {
	createFrom: true,
	createValue: true,
	createGas: true,
	createInit: true,
	createResultGasUsed: true,
	createResultCode: true,
	createResultAddress: true,
	callFrom: true,
	callTo: true,
	callValue: true,
	callGas: true,
	callSighash: true,
	callInput: true,
	callResultGasUsed: true,
	callResultOutput: true,
	suicideAddress: true,
	suicideRefundAddress: true,
	suicideBalance: true,
	rewardAuthor: true,
	rewardValue: true,
	rewardType: true
}

export const allStateDiffFields = {}

export const allBlockHeaderFields = {
	nonce: true,
	sha3Uncles: true,
	logsBloom: true,
	transactionsRoot: true,
	stateRoot: true,
	receiptsRoot: true,
	mixHash: true,
	miner: true,
	difficulty: true,
	totalDifficulty: true,
	extraData: true,
	size: true,
	gasLimit: true,
	gasUsed: true,
	baseFeePerGas: true
}

export const allFields = {
	transaction: allTransactionFields,
	log: allLogFields,
	trace: allTraceFields,
	stateDiff: allStateDiffFields,
	block: allBlockHeaderFields
}