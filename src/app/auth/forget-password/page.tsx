import { InputEmail } from "@/components/inputs"
import { LinkText } from "@/components/links"
import { Button } from "@/components/overrides/button"
import { Label } from "@/components/ui/label"

export default function ForgetPassword() {
    return (
        <form>
            <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="email">E-mail</Label>
                    <InputEmail id="email" />
                </div>

                <Button
                    type="submit"
                    className="w-full">
                    Enviar o link para redefinir a senha
                </Button>
            </div>

            <div className="mt-5 text-center text-sm">
                <LinkText href="/auth/login">Voltar para o Login</LinkText>
            </div>
        </form>
    )
}