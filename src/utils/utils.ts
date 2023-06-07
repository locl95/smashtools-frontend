class SmashToolsError extends Error {
    statusCode: number

    constructor(name: string, statusCode: number, message?: string) {
        super(message)
        Object.setPrototypeOf(this, SmashToolsError.prototype)
        this.name = name
        this.statusCode = statusCode
    }

    print() {
        return {
            name: this.name,
            statusCode: this.statusCode,
        }
    }
}

export const easyFetch = async <T>(
    method: string,
    partialUrl: string,
    body?: object,
    token?: string
): Promise<T> => {
    const url = `http://localhost:8080/${partialUrl}`
    const headers: HeadersInit = {
        'Content-Type': 'application/json',
        ...(token && {
            Authorization: token,
        }),
    }
    const requestInit: RequestInit = {
        body: JSON.stringify(body),
        headers,
        method,
    }
    const response = await fetch(url, requestInit)
    if (response.status >= 400) {
        const { name, statusCode } = await response.json()
        if (name && statusCode) throw new SmashToolsError(name, statusCode)
        else throw new SmashToolsError('UnknownError', response.status)
    }
    return ((await response.json()) as unknown) as T
}