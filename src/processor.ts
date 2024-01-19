import assert from 'assert'
import {EvmBatchProcessor} from '@subsquid/evm-processor'
import {networksConfig} from './testConfig'

assert(Object.keys(networksConfig).includes(process.argv[2]), `no config for network "${process.argv[2]}"`)
export const config = networksConfig[process.argv[2] as keyof typeof networksConfig]

const processor = new EvmBatchProcessor().setGateway(config.datasetUrl)

if (config.range) processor.setBlockRange(config.range)
if (config.includeAllBlocks) processor.includeAllBlocks()
if (config.transactions) {
    for (let txRequest of config.transactions) {
        processor.addTransaction(txRequest)
    }
}
if (config.logs) {
    for (let logRequest of config.logs) {
        processor.addLog(logRequest)
    }
}
if (config.fields) processor.setFields(config.fields)

export { processor }
