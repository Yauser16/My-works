
export const useHttp = () => {
    const request = async (url, method = 'GET', body = null, headers = {'Content-type': 'application/json'}) => {
try {
    const response = await fetch(url, {method, body, headers});

    if (!response.ok) {
        throw new Error(`Не удалось получить ${url}, статус ${response.status}`);
    }
    const data = await response.json();

    return data;
} catch(e) {
    throw e;
}
    }
    return {request};
}