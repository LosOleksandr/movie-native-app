import { cx } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

import type clsx from 'clsx'

export const cn = (...inputs: clsx.ClassValue[]) => {
    return twMerge(cx(...inputs))
}
