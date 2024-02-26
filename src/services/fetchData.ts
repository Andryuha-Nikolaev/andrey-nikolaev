interface FetchDataOptions {
  method?: string
  body?: object
  // revalidateTime?: number
}

// const REVALIDATE = 600
const csrfToken = process.env.NEXT_PUBLIC_X_CSRF_TOKEN
const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL

export const fetchData = async <T>(
  path: string,
  options: FetchDataOptions = {}
): Promise<T> => {
  const url = `${baseUrl}/${path}`

  const response = await fetch(url, {
    method: options.method ?? "GET",
    headers: {
      "X-Csrf-Token": csrfToken ?? "",
    },
    body: JSON.stringify(options.body),
    // next: {
    // revalidate: options.revalidateTime ?? REVALIDATE,
    // },

    cache: "no-cache",
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(`Unable to fetch data from ${url}.`)
  }

  return data as T
}
