import { Button as ButtonLib } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Button({ className, ...props }: React.ComponentProps<typeof ButtonLib>) {
    return (
        <ButtonLib
            className={cn('cursor-pointer', className)}
            {...props} />
    )
}