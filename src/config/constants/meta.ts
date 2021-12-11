import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'X-HASH Finance',
  description:
    'The most popular AMM on BSC by user count! Earn XSH through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by XSH) on a platform you can trust.',
  image: 'https://xhash.farm/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('X-HASH Finance')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('X-HASH Finance')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('X-HASH Finance')}`,
      }
    case '/vault':
      return {
        title: `${t('Vault')} | ${t('X-HASH Finance')}`,
      }
    default:
      return null
  }
}
