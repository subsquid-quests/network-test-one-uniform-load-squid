import {EvmBatchProcessor} from '@subsquid/evm-processor'
import {assertNotNull} from '@subsquid/util-internal'
import {
    REQUEST_FIELDS,
    NULL_ADDRESS,
    ERC20_TRANSFER_TOPIC,
    BASE_DATASET_URL,
    BASE_USDC_ADDRESS,
    BASE_USDC_DEPLOYED_AT
} from '../constants'

export const processor = new EvmBatchProcessor()
    .setGateway(BASE_DATASET_URL)
    .setBlockRange({
        from: parseInt(assertNotNull(process.env.BASE_STARTING_BLOCK)),
    })
    .addTransaction({
        to: [NULL_ADDRESS]
    })
    .addLog({
        address: [BASE_USDC_ADDRESS],
        topic0: [ERC20_TRANSFER_TOPIC],
        range: {
            from: BASE_USDC_DEPLOYED_AT
        }
    })
    .setFields(REQUEST_FIELDS)
