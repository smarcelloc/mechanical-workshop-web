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
    delay = 600
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
        <div className="fixed inset-0 flex flex-col gap-8 justify-center items-center z-9999 bg-black/95">

            <div className="flex-col gap-4 w-full flex items-center justify-center">
                <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
                    <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
                </div>
            </div>

            <div className="flex flex-col text-center gap-2">
                <h5 className="text-zinc-900 dark:text-white font-bold">
                    {message}
                </h5>
                <p className="text-balance text-sm text-muted-foreground">
                    {description}
                </p>
            </div>

        </div>
    )
}