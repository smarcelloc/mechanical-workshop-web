import { CarIcon } from 'lucide-react'
import Link from 'next/link'

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
            <div className="w-full max-w-sm">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-6">

                        <div className="flex flex-col items-center gap-2">
                            <Link
                                href="/auth/login"
                                className="flex flex-col items-center gap-2 font-medium"
                                tabIndex={-1}>
                                <div className="flex h-10 w-10 items-center justify-center rounded-md">
                                    <CarIcon className="size-dvh" />
                                </div>
                                <span className="sr-only">Logo do Sistema</span>
                            </Link>
                            <h1 className="text-xl font-bold">Oficina Mecânica</h1>
                        </div>

                        <div className="flex flex-col gap-6">
                            {children}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
