'use client'

import { useEffect, useState } from 'react'

interface LoadingProps {
    message?: string;
    description?: string;
    show?: boolean;
    delay?: number;
}

export default function Loading({
    message = 'Carregando...',
    description = 'Por favor, aguarde enquanto processamos sua solicitação',
    show = true,
    delay = 500
}: LoadingProps) {
    const [shouldRender, setShouldRender] = useState(false)

    useEffect(() => {
        let timeoutId: NodeJS.Timeout
        if (show) timeoutId = setTimeout(() => setShouldRender(true), delay)
        else setShouldRender(false)
        return () => clearTimeout(timeoutId)
    }, [show, delay])

    // Se o loading não estiver ativo, não renderize nada
    if (!show || !shouldRender) return null

    return (
        <div className="fixed inset-0 flex justify-center items-center z-9999 bg-black/95">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
                <h5 className="text-zinc-900 dark:text-white mt-4 font-bold">
                    {message}
                </h5>
                <p className="text-balance text-sm text-muted-foreground mt-2">
                    {description}
                </p>
            </div>
        </div>
    )
}