import { CarIcon } from 'lucide-react'
import Link from 'next/link'

export default function LoginLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="grid min-h-svh">
            <div className="flex flex-col gap-4 p-6 md:p-10">

                <div className="flex justify-center gap-2 md:justify-start">
                    <Link
                        href="/"
                        className="flex items-center gap-2 font-medium">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                            <CarIcon className="size-4" />
                        </div>
                        {process.env.APP_NAME}
                    </Link>
                </div>

                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-sm">
                        {children}
                    </div>
                </div>

            </div>
        </div>
    )
}