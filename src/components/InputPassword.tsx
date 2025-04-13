'use client'

import { useState } from 'react'
import { Input, Button } from '@/components'
import { Eye, EyeOff } from 'lucide-react'

export default function InputPassword({ disabled, ...props }: React.ComponentProps<typeof Input>) {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="relative">
            <Input
                type={showPassword ? 'text' : 'password'}
                className="pr-10"
                disabled={disabled}
                {...props} />
            <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent opacity-60"
                disabled={disabled}
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}>
                {showPassword ? (<EyeOff className="h-4 w-4" />) : (<Eye className="h-4 w-4" />)}
                <span className="sr-only">{showPassword ? 'Ocultar a Senha' : 'Mostrar a Senha'}</span>
            </Button>
        </div>
    )
}

