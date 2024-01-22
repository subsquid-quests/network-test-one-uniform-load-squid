import {allTransactionFields, allBlockHeaderFields} from './allFields'

function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

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
    fields: {
        transaction: allTransactionFields,
        block: allBlockHeaderFields
    }
}

export const networksConfig = {
    eth: {
        datasetUrl: 'http://localhost:8000/network/ethereum-mainnet',
        range: {
//            from: getRandomInt(0, 17_000_000)
            from: 0
        },
        ...commonConfig
    },
    bsc: {
        datasetUrl: 'http://localhost:8000/network/binance-mainnet',
        range: {
//            from: getRandomInt(0, 32_000_000)
            from: 0
        },
        ...commonConfig
    },
    base: {
        datasetUrl: 'http://localhost:8000/network/base-mainnet',
        range: {
//            from: getRandomInt(0, 8_000_000)
            from: 0
        },
        ...commonConfig
    },
    moonbeam: {
        datasetUrl: 'http://localhost:8000/network/moonbeam-mainnet',
        range: {
//            from: getRandomInt(0, 3_000_000)
            from: 0
        },
        ...commonConfig
    }
}
