// ** Types
import { IconProps } from '@iconify/react'
import { OptionsMenuType } from 'src/@core/components/option-menu/types'
import { ThemeColor } from 'src/@core/layouts/types'

export type CardStatsHorizontalProps = {
  title: string
  stats: string
  subtitle: string
  avatarIcon: string
  trendNumber: number
  avatarColor?: ThemeColor
  trend?: 'positive' | 'negative'
  avatarIconProps?: Omit<IconProps, 'icon'>
}

export type CardStatsVerticalProps = {
  title: string
  stats: string
  avatarSrc?: string
  trendNumber: number
  avatarIcon?: string
  avatarColor?: ThemeColor
  trend?: 'positive' | 'negative'
  optionsMenuProps?: OptionsMenuType
  avatarIconProps?: Omit<IconProps, 'icon'>
  extra?: string
}

export type CardStatsTargetProps = {
  title: string
  stats: string
  subtitle: string
  buttonText: string
  avatarIcon: string
  trendNumber: number
  buttonOptions: string[]
  avatarColor?: ThemeColor
  trend?: 'positive' | 'negative'
  avatarIconProps?: Omit<IconProps, 'icon'>
}
