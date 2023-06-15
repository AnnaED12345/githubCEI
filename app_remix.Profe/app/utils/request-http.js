export function requestHttp(url, options = {}) {
  return fetch(url, options).then((response) => {
    if (response.redirected) {
      window.location.href = response.url;
    } else if (response.status === 403) {
      window.location.href = `/app-tareas/${userId}`;
    }

    return response.json();
  });
}
