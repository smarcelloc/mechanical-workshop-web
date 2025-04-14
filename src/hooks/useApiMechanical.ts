interface RequestProps {
    uri: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'
    data?: object;
    headers?: Record<string, string>;
}

interface ResponseProps {
    code: number;
    data?: any;
}

export class ApiMechanicalError extends Error {
    constructor(public message: string, public responde: ResponseProps) { super(message) }
}

interface LoginResponse {
    user: { name: string },
    access_token: string,
    refresh_token: string,
    expires_in: number
}

export default function useApiMechanical(baseUrl: string) {

    async function request({ uri, method, data, headers }: RequestProps): Promise<ResponseProps> {
        const response = await fetch(baseUrl + uri, { method: method, body: JSON.stringify(data), headers: headers })
        if (response.ok) return { code: response.status, data: await response.json() }
        throw new ApiMechanicalError(response.statusText, { code: response.status, data: await response.json() })
    }

    async function login(email?: string, password?: string): Promise<LoginResponse> {
        const response = await request({ uri: '/auth/login', method: 'POST', data: { email, password } })
        return response.data
    }

    return {
        login
    }
}