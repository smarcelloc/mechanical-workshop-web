import { Button as ButtonLib } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

interface ButtonProps extends React.ComponentProps<typeof ButtonLib> {
    loading?: boolean
}

export default function Button({ className, size = 'lg', disabled, loading, children, ...props }: ButtonProps) {
    return (
        <ButtonLib
            size={size}
            className={cn('cursor-pointer', className)}
            disabled={disabled || loading}
            {...props}>
            {loading && <Loader2 className="animate-spin" />}
            {children}
        </ButtonLib>
    )
}