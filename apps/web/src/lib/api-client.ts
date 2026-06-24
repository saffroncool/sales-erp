export async function fetchJSON(path: string, opts?: RequestInit) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + path, opts)
  return res.json()
}
