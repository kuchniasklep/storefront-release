export default async function Fetch(url, body) {
  const headers = new Headers();
  headers.append('pragma', 'no-cache');
  headers.append('cache-control', 'no-cache');
  return fetch(url, {
    method: 'POST',
    body: body,
    headers: headers,
    credentials: "same-origin"
  })
    .then(response => {
    if (!response.ok)
      throw { name: response.status, message: response.statusText };
    return response;
  });
}
