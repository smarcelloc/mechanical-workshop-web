import { InputEmail, InputPassword } from '@/components/inputs'
import { LinkText } from '@/components/links'
import { Button } from '@/components/overrides/button'
import { Label } from '@/components/ui/label'

export default function Login() {
    return (
        <form>
            <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="email">E-mail</Label>
                    <InputEmail
                        id="email"
                        tabIndex={1} />
                </div>

                <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="password">Senha</Label>
                        <LinkText
                            href="/auth/forget-password"
                            className="ml-auto text-sm">Esqueceu sua senha?</LinkText>
                    </div>
                    <InputPassword
                        id="password"
                        tabIndex={2} />
                </div>

                <Button
                    type="submit"
                    className="w-full"
                    tabIndex={3}>
                    Acessar
                </Button>
            </div>
        </form>
    )
}
