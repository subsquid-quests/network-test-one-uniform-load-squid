import {EvmBatchProcessor} from '@subsquid/evm-processor'
import {assertNotNull} from '@subsquid/util-internal'
import {
    REQUEST_FIELDS,
    NULL_ADDRESS,
    ERC20_TRANSFER_TOPIC,
    ETH_DATASET_URL,
    ETH_USDT_ADDRESS,
    ETH_USDT_DEPLOYED_AT
} from '../constants'

export const processor = new EvmBatchProcessor()
    .setGateway(ETH_DATASET_URL)
    .setBlockRange({
        from: parseInt(assertNotNull(process.env.ETH_STARTING_BLOCK)),
    })
    .addTransaction({
        to: [NULL_ADDRESS]
    })
    .addLog({
        address: [ETH_USDT_ADDRESS],
        topic0: [ERC20_TRANSFER_TOPIC],
        range: {
            from: ETH_USDT_DEPLOYED_AT
        }
    })
    .setFields(REQUEST_FIELDS)
