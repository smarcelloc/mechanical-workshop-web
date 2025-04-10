import { InputEmail } from "@/components/inputs";
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

import Link from 'next/link';

export default function ForgetPassword() {
    return (
        <form>
            <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <InputEmail id="email" />
                </div>

                <Button
                    type="submit"
                    className="w-full">
                    Enviar o link para redefinir a senha
                </Button>
            </div>

            <div className="mt-5 text-center">
                <Link
                    href="/auth/login"
                    className="text-sm underline-offset-2 hover:underline">
                    Voltar para o Login
                </Link>
            </div>
        </form>
    )
}