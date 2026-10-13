import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cx } from '../../utils/cn'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'ghost'; children: ReactNode }
export default function Button({ variant = 'primary', className, children, ...props }: Props) {
  return <button className={cx('v-button', `v-button-${variant}`, className)} {...props}>{children}</button>
}
