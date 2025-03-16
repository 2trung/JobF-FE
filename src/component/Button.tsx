import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import LoadingIcon from './icons/LoadingIcon'
import { cn } from '../lib/clsx-twmerge'

export const buttonVariants = cva(
  'cursor-pointer inline-flex items-center justify-center rounded-sm focus-visible:outline-none disabled:pointer-events-none transition-all outline-none tracking-normal text-base font-semibold disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'bg-white disabled:bg-blue-30 hover:bg-[#f5f5ff] text-black',
        outline:
          'border border-slate-60 bg-white text-slate-100 hover:bg-slate-10 disabled:opacity-50 disabled:border-slate-20',
        ghost: 'hover:bg-slate-20 text-slate-70 disabled:opacity-50',
        destructive: 'bg-red text-white hover:bg-red-50 disabled:opacity-50',
        link: 'hover:underline font-normal disabled:text-slate-40 text-blue-60 h-auto',

        'outline-destructive':
          'border border-red bg-white text-red hover:bg-red-0 disabled:opacity-50 disabled:border-red-20',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 text-sm px-2',
        lg: 'h-12 px-4',
        link: 'px-0 py-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)
export type buttonVariant =
  | 'default'
  | 'outline'
  | 'ghost'
  | 'destructive'
  | 'link'
  | 'outline-destructive'
  | null
  | undefined

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, isLoading, children, disabled, ...props },
    ref
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        disabled={disabled}
      >
        {isLoading && <LoadingIcon />}
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export default Button
