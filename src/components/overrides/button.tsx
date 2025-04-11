import { Button as ButtonLib } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Button({ className, size = 'lg', ...props }: React.ComponentProps<typeof ButtonLib>) {
    return (
        <ButtonLib
            size={size}
            className={cn('cursor-pointer', className)}
            {...props} />
    )
}