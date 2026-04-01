const API_BASE_URL = "http://localhost:8080/api";

function getUsernameFromQuery() {
    const params = new URLSearchParams(window.location.search);
    return (params.get("username") || "").trim();
}

function appendUsername(path) {
    const username = getUsernameFromQuery();
    if (!username) {
        return path;
    }

    const separator = path.includes("?") ? "&" : "?";
    return `${path}${separator}username=${encodeURIComponent(username)}`;
}

function navigateTo(path) {
    window.location.href = appendUsername(path);
}

function requireUsername() {
    const username = getUsernameFromQuery();
    if (!username) {
        window.location.href = "index.html";
        return "";
    }

    return username;
}

async function fetchJson(url, options = {}) {
    const response = await fetch(url, options);
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Request failed");
    }

    if (response.status === 204) {
        return null;
    }

    const contentType = response.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
        return response.json();
    }

    return response.text();
}
