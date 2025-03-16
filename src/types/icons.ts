import { SVGProps } from 'react'

import { IconsObject } from '../component/icons'

export interface IconProps extends Partial<SVGProps<SVGSVGElement>> {
  size?: string | number
  absoluteStrokeWidth?: boolean
}

export type KeyOfIcon = keyof typeof IconsObject
export type ValueOfIcon = (typeof IconsObject)[KeyOfIcon]
