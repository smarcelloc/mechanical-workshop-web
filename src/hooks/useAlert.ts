import { toast } from 'sonner'

interface AlertOptions {
    description?: string
    position?: 'top-center' | 'top-left' | 'top-right' | 'bottom-center' | 'bottom-left' | 'bottom-right'
}

export default function useAlert() {

    function success(message: string, options?: AlertOptions) {
        toast.success(message, {
            position: options?.position || 'top-center',
            description: options?.description,
            style: {
                backgroundColor: 'var(--success)',
                color: 'var(--success-foreground)',
                border: '1px solid var(--success)'
            }
        })
    }

    function error(message: string, options?: AlertOptions) {
        toast.error(message, {
            position: options?.position || 'top-center',
            description: options?.description,
            style: {
                backgroundColor: 'var(--destructive)',
                color: 'var(--destructive-foreground)',
                border: '1px solid var(--destructive)'
            }
        })
    }

    function warning(message: string, options?: AlertOptions) {
        toast.warning(message, {
            position: options?.position || 'top-center',
            description: options?.description,
            style: {
                backgroundColor: 'var(--warning)',
                color: 'var(--warning-foreground)',
                border: '1px solid var(--warning)'
            }
        })
    }


    return { success, error, warning }
}