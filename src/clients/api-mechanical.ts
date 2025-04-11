import { RequestJson, RequestJsonError, ResponseJsonData, RequestJsonData } from '@/lib/request-json'

export class ApiMechanical extends RequestJson {
    public constructor(baseUrl: string) { super(baseUrl) }
    public setAuth = (token: string) => this.setHeaderDefault('Authorization', `Bearer ${token}`)
    public deleteAuth = () => this.deleteHeaderDefault('Authorization')

    protected async send(data: RequestJsonData): Promise<ResponseJsonData> {
        try {
            return await super.send(data)
        } catch (error) {
            if (error instanceof RequestJsonError && error.response.status === 401) this.deleteAuth()
            throw error
        }
    }

    public async login(email: string, password: string) {
        return await this.send({ method: 'POST', url: '/auth/login', body: { email, password } })
    }

    public async forgotPassword(email: string) {
        return await this.send({ method: 'POST', url: '/auth/forgot-password', body: { email } })
    }

    public async resetPassword(token: string, email: string, password: string, passwordConfirmation: string) {
        return await this.send({ method: 'POST', url: '/auth/reset-password', body: { token, email, password, password_confirmation: passwordConfirmation } })
    }

}