export async function formfetch(url, formProperties) {
  let body = null;
  if (formProperties) {
    body = new FormData();
    Object.entries(formProperties).forEach(([key, value]) => {
      body.append(key, value);
    });
  }
  return internalfetch(url, body);
}
export async function jsonfetch(url, data) {
  return internalfetch(url, JSON.stringify(data));
}
async function internalfetch(url, body) {
  const headers = new Headers();
  headers.append('pragma', 'no-cache');
  headers.append('cache-control', 'no-cache');
  return fetch(url, {
    method: 'POST',
    body: body,
    headers: headers,
    credentials: "same-origin"
  }).then(response => {
    if (!response.ok)
      throw { name: response.status, message: response.statusText };
    return response;
  });
}
