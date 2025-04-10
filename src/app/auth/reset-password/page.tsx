import { InputEmail, InputPassword } from "@/components/inputs"
import { LinkText } from "@/components/links"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function ResetPassword() {
    return (
        <form>
            <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <InputEmail
                        id="email"
                        placeholder="email@example.com"
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