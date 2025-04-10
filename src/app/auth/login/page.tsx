import { CarFrontIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
            <div className="w-full max-w-sm">
                <div className="flex flex-col gap-6">
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center gap-2">
                                <a
                                    href="#"
                                    className="flex flex-col items-center gap-2 font-medium"
                                >
                                    <div className="flex h-8 w-8 items-center justify-center rounded-md">
                                        <CarFrontIcon className="size-7" />
                                    </div>
                                    <span className="sr-only">Logo do Sistema</span>
                                </a>
                                <h1 className="text-xl font-bold">Oficina Mecânica</h1>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Senha</Label>
                                        <a
                                            href="#"
                                            className="ml-auto text-sm underline-offset-2 hover:underline"
                                        >
                                            Esqueceu sua senha?
                                        </a>
                                    </div>
                                    <Input id="password" type="password" />
                                </div>
                                <Button type="submit" className="w-full">
                                    Acessar o Sistema
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
