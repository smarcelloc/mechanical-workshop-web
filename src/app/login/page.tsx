'use client'

import { InputEmail, InputPassword, Button, LinkText, Loading, Label, InputError } from '@/components'
import { ApiMechanicalError, useApiMechanical } from '@/hooks'
import { useState } from 'react'

export default function LoginPage() {
    const api = useApiMechanical('http://localhost:8000')

    const [loading, setLoading] = useState(false)
    const [formError, setFormError] = useState<Record<string, string[]>>()

    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()

    async function login(e: React.FormEvent<HTMLFormElement>) {
        try {
            e.preventDefault()
            setFormError({})
            setLoading(true)
            const response = await api.login(email, password)
            console.log(response)
            setLoading(false)
        } catch (error) {
            setLoading(false)

            if (error instanceof ApiMechanicalError && error.responde.code === 422) {
                setFormError(error.responde.data)
                return
            }

            console.log(error)
        }
    }

    return (
        <main>
            <form
                onSubmit={login}
                className="flex flex-col gap-12">

                <div className="flex flex-col items-center gap-2 text-center">
                    <h1 className="text-2xl font-bold">Acessar a sua conta</h1>
                    <p className="text-balance text-sm text-muted-foreground">
                        Digite seu email abaixo para acessar sua conta
                    </p>
                </div>

                <div className="grid gap-6">

                    <div className="grid gap-2">
                        <Label htmlFor="email">E-mail</Label>
                        <InputEmail
                            id="email"
                            autoFocus
                            tabIndex={1}
                            value={email}
                            error={Boolean(formError?.email?.[0])}
                            onChange={e => setEmail(e.target.value)} />
                        {formError?.email && <InputError>{formError?.email?.[0]}</InputError>}
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
                        <InputPassword
                            id="password"
                            tabIndex={2}
                            value={password}
                            error={Boolean(formError?.password?.[0])}
                            onChange={e => setPassword(e.target.value)} />
                        {formError?.password && <InputError>{formError?.password?.[0]}</InputError>}
                    </div>

                    <Button
                        type="submit"
                        className="w-full"
                        tabIndex={3}
                        disabled={loading}>
                        Acessar
                    </Button>

                </div>

            </form>

            <Loading show={loading} />
        </main>
    )
}   