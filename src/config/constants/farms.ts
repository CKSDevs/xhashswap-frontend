import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'XSH',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xBF5eafCE739037b83e7d01D5FF9BC7CA7Bc8a2Cd' /* 0xb30B27aDb3B0A45e88385eB2BB144Fad9120A420 */,
    },
    token: tokens.xsh,
    quoteToken: tokens.busd,
  },
  {
    pid: 1,
    lpSymbol: 'XSH-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xBF5eafCE739037b83e7d01D5FF9BC7CA7Bc8a2Cd',
    },
    token: tokens.xsh,
    quoteToken: tokens.busd,
  },
  {
    pid: 2,
    lpSymbol: 'XSH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xaCEE74a8f86Bd08B72D4f911D3DDD44561c59F32',
    },
    token: tokens.xsh,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 4,
    lpSymbol: 'X-MINE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x62bd4aCb9a09bD1d8953Eb2371D7C86D3D3eC70d',
    },
    token: tokens.xmine,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 16,
    lpSymbol: 'EVOC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x466EFF6Ee88a651c7CBa211939Efc60c36374d65',
    },
    token: tokens.evoc,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 17,
    lpSymbol: 'X-MINE-SHG LP',
    lpAddresses: {
      97: '',
      56: '0x071191205aa3a0f7cacb5f1a6ba133e3e99c1db7',
    },
    token: tokens.shg,
    quoteToken: tokens.xmine,
  },
  {
    pid: 18,
    lpSymbol: 'X-MINE-SLC LP',
    lpAddresses: {
      97: '',
      56: '0x856858D38dcc8C05DF72dB2DFE1685a358c96A2b',
    },
    token: tokens.slc,
    quoteToken: tokens.xmine,
  },
  {
    pid: 19,
    lpSymbol: 'X-MINE-IGN LP',
    lpAddresses: {
      97: '',
      56: '0xdd419cae1dd00effdc3ee2889666880c00a714de',
    },
    token: tokens.ign,
    quoteToken: tokens.xmine,
  },
  {
    pid: 20,
    lpSymbol: 'X-MINE-EVOC LP',
    lpAddresses: {
      97: '',
      56: '0x077caecd627b8b9be7b0986f4d1214b2d736eb4c',
    },
    token: tokens.evoc,
    quoteToken: tokens.xmine,
  },
  {
    pid: 21,
    lpSymbol: 'X-MINE-RAYON LP',
    lpAddresses: {
      97: '',
      56: '0xCF582dA9d9b0263782670AF4c3d5C5054E3890FF',
    },
    token: tokens.rayon,
    quoteToken: tokens.xmine,
  },
  {
    pid: 5,
    lpSymbol: 'BUSD-USDC LP',
    lpAddresses: {
      97: '',
      56: '0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1',
    },
    token: tokens.busd,
    quoteToken: tokens.usdc,
  },
  {
    pid: 6,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x804678fa97d91B974ec2af3c843270886528a9E6',
    },
    token: tokens.cake,
    quoteToken: tokens.busd,
  },
  {
    pid: 7,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 8,
    lpSymbol: 'BTCB-ETH LP',
    lpAddresses: {
      97: '',
      56: '0xD171B26E4484402de70e3Ea256bE5A2630d7e88D',
    },
    token: tokens.btcb,
    quoteToken: tokens.eth,
  },
  {
    pid: 9,
    lpSymbol: 'X-MINE',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xe39f6663cAd0ce1D97e2e02f6A4Bc990ee34dB72' /* 0x0fA9651a0ecC19906843C13c60443300B9d37355 */,
    },
    token: tokens.xmine,
    quoteToken: tokens.usdt,
  },
  {
    pid: 10,
    lpSymbol: 'BUSD',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    token: tokens.busd,
    quoteToken: tokens.busd,
  },
  {
    pid: 12,
    lpSymbol: 'CAKE',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x804678fa97d91B974ec2af3c843270886528a9E6' /* 0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82 */,
    },
    token: tokens.cake,
    quoteToken: tokens.busd,
  },
  {
    pid: 11,
    lpSymbol: 'wBNB',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16' /* 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c */,
    },
    token: tokens.wbnb,
    quoteToken: tokens.busd,
  },
  {
    pid: 13,
    lpSymbol: 'FTM',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x343c0aD4EEcF9b0fDa4Cea3d351c13D0fCa16bB1' /* 0xAD29AbB318791D579433D831ed122aFeAf29dcfe */,
    },
    token: tokens.ftm,
    quoteToken: tokens.busd,
  },
  {
    pid: 14,
    lpSymbol: 'ETH',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0x7213a321F1855CF1779f42c0CD85d3D95291D34C' /* 0x2170Ed0880ac9A755fd29B2688956BD959F933F8 */,
    },
    token: tokens.eth,
    quoteToken: tokens.busd,
  },
  {
    pid: 15,
    lpSymbol: 'BTCB',
    isTokenOnly: true,
    lpAddresses: {
      97: '',
      56: '0xF45cd219aEF8618A92BAa7aD848364a158a24F33' /* 0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c */,
    },
    token: tokens.btcb,
    quoteToken: tokens.busd,
  },
]

export default farms
