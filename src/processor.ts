import assert from 'assert'
import {EvmBatchProcessor} from '@subsquid/evm-processor'
import {networksConfig} from './testConfig'

assert(Object.keys(networksConfig).includes(process.argv[2]), `no config for network "${process.argv[2]}"`)
export const config = networksConfig[process.argv[2] as keyof typeof networksConfig]

const processor = new EvmBatchProcessor().setGateway(config.datasetUrl)

if (config.range) processor.setBlockRange(config.range)
if (config.includeAllBlocks) processor.includeAllBlocks()
for (let txRequest of config.transactions) {
    processor.addTransaction(txRequest)
}
for (let logRequest of config.logs) {
    processor.addLog(logRequest)
}
for (let traceRequest of config.traces) {
    processor.addTrace(traceRequest)
}
for (let stateDiffRequest of config.stateDiffs) {
    processor.addStateDiff(stateDiffRequest)
}
processor.setFields(config.fields)

export { processor }
