import {assertNotNull} from '@subsquid/util-internal'

import {allTransactionFields, allBlockHeaderFields} from './allFields'
import {getRandomInt} from './utils'

const gateway = assertNotNull(process.env.SUBSQUID_NETWORK_GATEWAY)

const commonConfig = {
    batchHandler: async (ctx: any) => {
        let burns = 0
        for (let block of ctx.blocks) {
            burns += block.transactions.length
        }
        ctx.log.info(`Got ${burns} burn txs`)
    },
    includeAllBlocks: true,
    transactions: [
        {
            to: ['0x0000000000000000000000000000000000000000']
        }
    ],
    logs: [],
    traces: [],
    stateDiffs: [],
    fields: {
        transaction: allTransactionFields,
        block: allBlockHeaderFields
    }
}

export const networksConfig = {
    eth: {
        datasetUrl: `${gateway}/network/ethereum-mainnet`,
        range: { from: getRandomInt(0, 14_000_000) },
        ...commonConfig
    },
    bsc: {
        datasetUrl: `${gateway}/network/binance-mainnet`,
        range: { from: getRandomInt(0, 30_000_000) },
        ...commonConfig
    },
    base: {
        datasetUrl: `${gateway}/network/base-mainnet`,
        range: { from: getRandomInt(0, 4_000_000) },
        ...commonConfig
    },
    moonbeam: {
        datasetUrl: `${gateway}/network/moonbeam-mainnet`,
        range: { from: 0 },
        ...commonConfig
    }
}
