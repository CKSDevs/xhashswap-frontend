import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 1,
    stakingToken: tokens.xsh,
    earningToken: tokens.evoc,
    contractAddress: {
      97: '',
      56: '0x7b1cFa49dc967d53778a0e8F9a688ee86eA9155e',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.004',
    sortOrder: 999,
  },
]

export default pools
