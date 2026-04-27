export type ServerStatus = "online" | "standby" | "offline";

export interface Server {
    name: string;
    location: string;
    ip: string;
    key: string;
    status: ServerStatus;
}

export const SERVERS: Server[] = [
    {
        name: "Alpha Node",
        location: "Bangalore, India",
        ip: "103.45.67.12",
        key: "OeVuKk5nlHiXp9APNnSGHz+qBtLzZp3Ig0fMHHKAkBk=",
        status: "online",
    },
    {
        name: "Beta Relay",
        location: "Frankfurt, Germany",
        ip: "185.210.32.55",
        key: "dK7xWm9pRnJcXzFb2sTYh4ALqEgNvPuZiC0jQwHf+3M=",
        status: "online",
    },
    {
        name: "Gamma Bridge",
        location: "Singapore",
        ip: "128.199.44.88",
        key: "mN4rT8vLpQ2sXaWj6YcBfE1gU9hK5oZiD7wRxCy+0Fk=",
        status: "standby",
    },
    {
        name: "Delta Hub",
        location: "Mumbai, India",
        ip: "157.245.12.203",
        key: "pA3bV6nJ8mLxQwEs5TfGhY2cR7uZiD0kO9aW4rXy+1N=",
        status: "online",
    },
    {
        name: "Epsilon Vault",
        location: "Oregon, US",
        ip: "44.202.156.78",
        key: "zF5gH8jK1lM3nO6pQ9rS2tU4vW7xY0aB8cD5eF2gH+J=",
        status: "offline",
    },
];

export const STRIPE_COLORS = ["c0", "c1", "c2", "c3", "c4"] as const;
export type StripeColor = (typeof STRIPE_COLORS)[number];
