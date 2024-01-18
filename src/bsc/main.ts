import {MockDatabase} from '@belopash/mock-store'
import {processor} from './processor'

processor.run(new MockDatabase(), async ctx => {
    let burns = 0
    let usdtTransfers = 0
    for (let block of ctx.blocks) {
        burns += block.transactions.length
        usdtTransfers += block.logs.length
    }
    ctx.log.info(`Got ${burns} burn txs and ${usdtTransfers} BUSD transfers`)
})
