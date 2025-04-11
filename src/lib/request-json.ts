export interface RequestJsonData {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    url: string,
    headers?: HeadersInit,
    body?: object,
    signal?: AbortSignal
}

export interface ResponseJsonData {
    status: number,
    headers: Headers,
    body?: any,
}

export class RequestJsonError extends Error {
    constructor(public message: string, public response: ResponseJsonData) {
        super(message)
        this.name = 'RequestJsonError'
    }
}

export class RequestJson {

    constructor(protected baseUrl?: string, private headersDefault: HeadersInit = {}) {
        this.setHeaderDefault('Content-Type', 'application/json')
        this.setHeaderDefault('Accept', 'application/json')
    }

    protected setHeaderDefault(key: string, value: string) {
        if (this.headersDefault instanceof Headers) {
            this.headersDefault.set(key, value)
            return
        }

        if (typeof this.headersDefault === 'object' && !Array.isArray(this.headersDefault)) {
            (this.headersDefault as Record<string, string>)[key] = value
            return
        }
    }

    protected deleteHeaderDefault(key: string) {
        if (this.headersDefault instanceof Headers) {
            this.headersDefault.delete(key)
            return
        }

        if (typeof this.headersDefault === 'object' && !Array.isArray(this.headersDefault)) {
            delete (this.headersDefault as Record<string, string>)[key]
        }
    }

    protected async send({ method, url, body, headers, signal }: RequestJsonData): Promise<ResponseJsonData> {
        const urlFull = this.baseUrl ? this.baseUrl + url : url
        const headersMerge = { ...this.headersDefault, ...headers }
        const response = await fetch(urlFull, { method: method, body: JSON.stringify(body), headers: headersMerge, signal })
        const bodyJson = await response.json()
        const responseData = { status: response.status, headers: response.headers, body: bodyJson }
        if (response.ok) return responseData
        throw new RequestJsonError(response.statusText, responseData)
    }
}