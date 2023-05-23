interface BodyConfig {
  method: string
}

export interface Body {
  chatId: string
  count?: number
  message?: string
}

export const api = async <TResponse, TParams = undefined>(
  url: string,
  { method = 'GET' }: BodyConfig,
  body?: TParams
): Promise<TResponse> => {
  const init: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  }
  if (body) {
    init.body = JSON.stringify(body)
  }

  const res = await fetch(url, init)
  const data = await res.json()
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  return data
}
