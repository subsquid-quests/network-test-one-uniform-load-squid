import {MockDatabase} from '@belopash/mock-store'
import {processor, config} from './processor'

processor.run(new MockDatabase(), config.batchHandler)
