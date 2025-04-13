import { Label } from '@/components/ui/label'
import { InputEmail, InputPassword, Button, LinkText } from '@/components'

export default function LoginPage() {
    return (
        <main>
            <form className="flex flex-col gap-12">

                <div className="flex flex-col items-center gap-2 text-center">
                    <h1 className="text-2xl font-bold">Acessar a sua conta</h1>
                    <p className="text-balance text-sm text-muted-foreground">
                        Digite seu email abaixo para acessar sua conta
                    </p>
                </div>

                <div className="grid gap-6">

                    <div className="grid gap-2">
                        <Label htmlFor="email">E-mail</Label>
                        <InputEmail id="email" />
                    </div>

                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Senha</Label>
                            <LinkText
                                href="#"
                                tabIndex={4}
                                className="ml-auto text-sm">
                                Esqueceu a sua senha?
                            </LinkText>
                        </div>
                        <InputPassword id="password" />
                    </div>

                    <Button
                        type="submit"
                        className="w-full"
                        tabIndex={3}>
                        Acessar
                    </Button>

                </div>

            </form>
        </main>
    )
}   