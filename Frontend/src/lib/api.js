
const API_BASE = `${import.meta.env.BACKEND_URI}/auth`

export const apiRequest = async (Path, { method="GET", body, token} ={}) => {
    try {
        const res = await fetch(`${API_BASE}${Path}`, {
            method,
            headers: {
                "Content-Type": "application/json",
                ...(token ? {Authorization: `Bearer ${token}`} : {}),
            },
            body: body ? JSON.stringify(body) : undefined,
            credentials: "include"
        });

        return res
    } catch (error) {
        console.error("API request error: ",error);
        throw new Error(error.message || "API request failed");
    }
}