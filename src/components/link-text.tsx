import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function LinkText({ children, className, ...props }: React.ComponentProps<typeof Link>) {
    return (
        <Link
            className={cn(
                'inline-block underline-offset-2 underline transition-all duration-300 hover:scale-105 origin-center',
                className
            )}
            {...props}>
            {children}
        </Link>
    )
}