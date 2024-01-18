import {EvmBatchProcessor} from '@subsquid/evm-processor'
import {assertNotNull} from '@subsquid/util-internal'
import {
    REQUEST_FIELDS,
    NULL_ADDRESS,
    ERC20_TRANSFER_TOPIC,
    BSC_DATASET_URL,
    BSC_BUSD_ADDRESS,
    BSC_BUSD_DEPLOYED_AT
} from '../constants'

export const processor = new EvmBatchProcessor()
    .setGateway(BSC_DATASET_URL)
    .setBlockRange({
        from: parseInt(assertNotNull(process.env.BSC_STARTING_BLOCK)),
    })
    .addTransaction({
        to: [NULL_ADDRESS]
    })
    .addLog({
        address: [BSC_BUSD_ADDRESS],
        topic0: [ERC20_TRANSFER_TOPIC],
        range: {
            from: BSC_BUSD_DEPLOYED_AT
        }
    })
    .setFields(REQUEST_FIELDS)
