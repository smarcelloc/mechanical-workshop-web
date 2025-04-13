import { Input as InputLib } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface InputProps extends React.ComponentProps<typeof InputLib> {
    error?: boolean;
}

export default function Input({ className, error, readOnly, tabIndex, ...props }: InputProps) {
    return (
        <InputLib
            readOnly={readOnly}
            tabIndex={readOnly ? -1 : tabIndex}
            className={cn(
                'h-10',
                error && 'border-destructive focus-visible:border-destructive ring-destructive/20 dark:ring-destructive/40',
                readOnly && 'cursor-default focus-visible:ring-transparent focus-visible:border-input',
                className
            )}
            {...props} />
    )
}
