import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: t('Referral'),
  //   icon: 'GroupsIcon',
  //   href: '/referral',
  // },
  // {
  //   label: 'Games',
  //   icon: 'PredictionsIcon',
  //   href: '/games',
  // },
  {
    label: t('Stake'),
    icon: 'NftIcon',
    href: '/stake',
  },
  {
    label: t('Charts'),
    icon: 'InfoIcon',
    items: [
      {
        label: 'Dextools',
        href: 'https://www.dextools.io/app/bsc/pair-explorer/0xb30B27aDb3B0A45e88385eB2BB144Fad9120A420',
      },
      {
        label: 'Poocoin',
        href: 'https://poocoin.app/tokens/0xb30B27aDb3B0A45e88385eB2BB144Fad9120A420',
      },
    ],
  },
  {
    label: t('Community'),
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Telegram',
        href: 'https://t.me/xmineofficial',
      },
      {
        label: 'Instagram',
        href: 'https://instagram.com/xmineofficial_/',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/xmineofficial',
      },
    ],
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: 'GitHub',
        href: 'https://github.com/x-hash',
      },
      {
        label: 'Doc',
        href: 'https://bit.ly/WhitepaperXmineENGNew',
      },
    ],
  }
]

export default config
