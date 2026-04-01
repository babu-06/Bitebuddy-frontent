const API_BASE_URL = "http://localhost:8080/api/orders";

function getLoggedInUsername() {
    const params = new URLSearchParams(window.location.search);
    return (params.get("username") || "").trim();
}

function setStatus(message) {
    document.getElementById("statusMessage").textContent = message;
}

function parseOrderDate(value) {
    if (!value) {
        return null;
    }

    if (value instanceof Date) {
        return Number.isNaN(value.getTime()) ? null : value;
    }

    if (typeof value === "string" || typeof value === "number") {
        const directDate = new Date(value);
        return Number.isNaN(directDate.getTime()) ? null : directDate;
    }

    if (Array.isArray(value) && value.length >= 3) {
        const [
            year,
            month,
            day,
            hour = 0,
            minute = 0,
            second = 0,
            nano = 0
        ] = value;

        const arrayDate = new Date(year, month - 1, day, hour, minute, second, Math.floor(nano / 1000000));
        return Number.isNaN(arrayDate.getTime()) ? null : arrayDate;
    }

    const seconds = value.seconds ?? value._seconds;
    if (typeof seconds === "number") {
        const millisFromSeconds = seconds * 1000 + Math.floor((value.nanoseconds ?? value._nanoseconds ?? 0) / 1000000);
        const timestampDate = new Date(millisFromSeconds);
        return Number.isNaN(timestampDate.getTime()) ? null : timestampDate;
    }

    const millis = value.epochMilli ?? value.epochMillis ?? value.timestamp ?? value.time;
    if (typeof millis === "number") {
        const millisDate = new Date(millis);
        return Number.isNaN(millisDate.getTime()) ? null : millisDate;
    }

    if (typeof value === "object") {
        if (typeof value.toDate === "function") {
            const converted = value.toDate();
            return converted instanceof Date && !Number.isNaN(converted.getTime()) ? converted : null;
        }

        if (value.date) {
            return parseOrderDate(value.date);
        }
    }

    return null;
}

function formatQuantity(quantity) {
    const numericQuantity = Number(quantity);
    if (!Number.isFinite(numericQuantity) || numericQuantity < 1) {
        return "1 kg";
    }

    return `${Math.round(numericQuantity)} kg`;
}

function getOrderImage(itemName) {
    const exactMatch = findCatalogItemByName(itemName);
    if (exactMatch) {
        return exactMatch.image;
    }

    const looseMatch = BITE_CATALOG.find((item) => itemName && (item.name.includes(itemName) || itemName.includes(item.name)));
    return looseMatch ? looseMatch.image : "https://res.cloudinary.com/dn5wb46jl/image/upload/v1774504147/fish_cat_fyqmtb.png";
}

function renderOrders(orders) {
    const container = document.getElementById("ordersContainer");
    container.innerHTML = "";

    if (!orders.length) {
        container.innerHTML = `
            <div class="empty-card">
                <h3 class="product-name">No orders found</h3>
                <p class="topbar-copy">Place an order from the BiteBuddy menu and refresh this page.</p>
            </div>
        `;
        return;
    }

    orders.forEach((order) => {
        const card = document.createElement("article");
        card.className = "order-card";

        const parsedOrderedAt = parseOrderDate(order.orderedAt);
        const orderedAt = parsedOrderedAt
            ? parsedOrderedAt.toLocaleString("en-IN")
            : "Not available";

        card.innerHTML = `
            <div class="order-card-layout">
                <img class="order-visual" src="${getOrderImage(order.itemName)}" alt="${order.itemName}">
                <div class="order-body stack">
                    <div>
                        <span class="eyebrow">Legacy order</span>
                        <h2 class="product-name">${order.itemName}</h2>
                    </div>
                    <div class="meta-row">
                        <span class="meta-badge">Quantity: ${formatQuantity(order.quantity)}</span>
                        <span class="meta-badge">Price: Rs. ${order.price}</span>
                    </div>
                    <p class="topbar-copy">Ordered At: ${orderedAt}</p>
                    <p class="topbar-copy">Username: ${order.username}</p>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

async function loadOrders() {
    const username = getLoggedInUsername();
    const userBadge = document.getElementById("loggedInUser");

    if (!username) {
        userBadge.textContent = "User not signed in";
        setStatus("No username found in the page URL.");
        renderOrders([]);
        return;
    }

    userBadge.textContent = `Logged in as: ${username}`;
    setStatus("Loading your orders...");

    try {
        const response = await fetch(`${API_BASE_URL}?username=${encodeURIComponent(username)}`);

        if (!response.ok) {
            throw new Error("Failed to fetch orders");
        }

        const orders = await response.json();
        renderOrders(orders);
        setStatus(`Showing ${orders.length} order(s) for ${username}.`);
    } catch (error) {
        setStatus("Could not load orders. Make sure the Spring Boot server is running.");
        renderOrders([]);
        console.error(error);
    }
}

document.getElementById("refreshBtn").addEventListener("click", loadOrders);
window.addEventListener("load", loadOrders);
