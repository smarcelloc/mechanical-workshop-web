import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export default function InputError({ children, className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={cn('font-medium text-destructive text-sm', className)}
            {...props}>
            {children}
        </p>
    )
}

