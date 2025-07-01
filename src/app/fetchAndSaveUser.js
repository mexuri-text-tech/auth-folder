export const fetchAndSaveUser = async () => {
    try {
        const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/auth/login/success`, {
            method: "GET",
            credentials: "include",
        });
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
            const data = await res.json();
            if (data.user) {
                localStorage.setItem("user", JSON.stringify({ user: data.user }));
                // redirect to /profile or home if you want
                window.location.href = "/";
            } else if (res.status === 403) {
                // User not logged in, clear localStorage and redirect to login
                localStorage.removeItem("user");
                window.location.href = "/login";
            }
        } else {
            const text = await res.text();
            console.warn("Login success endpoint did not return JSON. Response status:", res.status, "Response text:", text);
        }
    } catch (err) {
        console.error("Login failed", err);
    }
};
