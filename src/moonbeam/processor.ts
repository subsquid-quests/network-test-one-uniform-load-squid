import {EvmBatchProcessor} from '@subsquid/evm-processor'
import {assertNotNull} from '@subsquid/util-internal'
import {
    REQUEST_FIELDS,
    NULL_ADDRESS,
    ERC20_TRANSFER_TOPIC,
    MOONBEAM_DATASET_URL,
    MOONBEAM_USDC_ADDRESS,
    MOONBEAM_USDC_DEPLOYED_AT
} from '../constants'

export const processor = new EvmBatchProcessor()
    .setGateway(MOONBEAM_DATASET_URL)
    .setBlockRange({
        from: parseInt(assertNotNull(process.env.MOONBEAM_STARTING_BLOCK)),
    })
    .addTransaction({
        to: [NULL_ADDRESS]
    })
    .addLog({
        address: [MOONBEAM_USDC_ADDRESS],
        topic0: [ERC20_TRANSFER_TOPIC],
        range: {
            from: MOONBEAM_USDC_DEPLOYED_AT
        }
    })
    .setFields(REQUEST_FIELDS)
