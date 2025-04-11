import { InputEmail, InputPassword } from "@/components/inputs"
import { LinkText } from "@/components/links"
import { Button } from "@/components/overrides/button"
import { Label } from "@/components/ui/label"

export default function ResetPassword() {
    return (
        <form>
            <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="email">E-mail</Label>
                    <InputEmail
                        id="email"
                        readOnly />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="password">Nova Senha</Label>
                    <InputPassword id="password" />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="password_confirmation">Confirmação da Nova Senha</Label>
                    <InputPassword id="password_confirmation" />
                </div>

                <Button
                    type="submit"
                    className="w-full">
                    Redefinir a Senha
                </Button>
            </div>

            <div className="mt-5 text-center text-sm">
                <LinkText href="/auth/login">Voltar para o Login</LinkText>
            </div>
        </form>
    )
}