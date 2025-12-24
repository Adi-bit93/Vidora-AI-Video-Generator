
const BASE_URL = `${import.meta.env.BACKEND_URI}/auth`

export const apiRequest = async (url, options ={}) => {
    const res = await fetch(`${BASE_URL}${url}`, {
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
        ...options,
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || "Request failed");
    }
    return data;
}