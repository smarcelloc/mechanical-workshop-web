import { InputEmail, InputPassword } from "@/components/inputs";
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Link from 'next/link';

export default function Login() {
    return (
        <form>
            <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="email">E-mail</Label>
                    <InputEmail id="email" />
                </div>

                <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="password">Senha</Label>
                        <Link
                            href="/auth/forget-password"
                            className="ml-auto text-sm underline-offset-2 hover:underline">
                            Esqueceu sua senha?
                        </Link>
                    </div>
                    <InputPassword id="password" />
                </div>

                <Button
                    type="submit"
                    className="w-full">
                    Acessar
                </Button>
            </div>
        </form>
    )
}
