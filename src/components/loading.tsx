import React from 'react'

interface LoadingProps {
    message?: string;
    description?: string;
}

export default function Loading({ message, description }: LoadingProps) {
    return (
        <div className="fixed inset-0 flex justify-center items-center z-9999 bg-black/95">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
                <h5 className="text-zinc-900 dark:text-white mt-4 font-bold">
                    {message || 'Carregando...'}
                </h5>
                <p className="text-balance text-sm text-muted-foreground mt-2">
                    {description || 'Por favor, aguarde enquanto processamos sua solicitação'}
                </p>
            </div>
        </div>
    )
}