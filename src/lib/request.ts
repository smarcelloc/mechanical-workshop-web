export interface RequestData {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    url: string,
    headers?: HeadersInit,
    body?: object,
    signal?: AbortSignal
}

export interface ResponseData {
    status: number,
    headers: Headers,
    body?: any,
}

export class RequestError extends Error {
    constructor(public message: string, public response: ResponseData) {
        super(message)
        this.name = 'RequestError'
    }
}

export class Request {

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

    protected async send({ method, url, body, headers, signal }: RequestData): Promise<ResponseData> {
        const urlFull = this.baseUrl ? this.baseUrl + url : url
        const headersMerge = { ...this.headersDefault, ...headers }
        const response = await fetch(urlFull, { method: method, body: JSON.stringify(body), headers: headersMerge, signal })
        const bodyJson = await response.json()
        const responseData = { status: response.status, headers: response.headers, body: bodyJson }
        if (response.ok) return responseData
        throw new RequestError(response.statusText, responseData)
    }
}