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
  {
    sousId: 2,
    stakingToken: tokens.xsh,
    earningToken: tokens.shg,
    contractAddress: {
      97: '',
      56: '0x186e0b68bb263918373c872eb0b1c8d39e1cccd0',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '140.38146937440973845',
    sortOrder: 999,
  },
  {
    sousId: 3,
    stakingToken: tokens.xsh,
    earningToken: tokens.slc,
    contractAddress: {
      97: '',
      56: '0xa51aa0f150a02f4df30cfcfc5d68f3f762b2f0fa',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '9.053045216961717253',
    sortOrder: 999,
  },
  {
    sousId: 4,
    stakingToken: tokens.xsh,
    earningToken: tokens.ign,
    contractAddress: {
      97: '',
      56: '0xe197767c2185ced1df61b758799de79a4d6d55ed',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '3.580172147058823529',
    sortOrder: 999,
  },
  {
    sousId: 5,
    stakingToken: tokens.xsh,
    earningToken: tokens.rayon,
    contractAddress: {
      97: '',
      56: '0x204e2a6af0283ad7211af4f7d65402a33c9a7724',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '75.488199677',
    sortOrder: 999,
  },
]

export default pools
