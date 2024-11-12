export const UserDatabase = [
    {
        id: 0,
        firstName: "Shaharear",
        lastName: "Shakib",
        userName: "shakib",
        age: 28,
        email: "shakib@gmail.com",
        password: "Admin@123",
        balance: 0,
        createdAt: "2024-01-01T08:00:00Z",
        transactions: [
            { type: "deposit", amount: 100, date: "2024-01-02T09:00:00Z" },
            { type: "withdrawal", amount: 50, date: "2024-01-05T10:30:00Z" }
        ],
        isAdmin: true
    },
    {
        id: 1,
        firstName: "Ehsanul",
        lastName: "Shaon",
        userName: "shaon",
        age: 24,
        email: "alicej@gmail.com",
        password: "User@123",
        balance: 100,
        createdAt: "2024-02-01T10:00:00Z",
        transactions: [
            { type: "deposit", amount: 200, date: "2024-02-05T11:00:00Z" },
            { type: "withdrawal", amount: 75, date: "2024-02-10T14:30:00Z" }
        ],
        isAdmin: false
    },
    {
        id: 2,
        firstName: "Bob",
        lastName: "Smith",
        userName: "bobsmith",
        age: 30,
        email: "bobsmith@gmail.com",
        password: "bsmith456",
        balance: 200,
        createdAt: "2024-03-01T09:00:00Z",
        transactions: [
            { type: "deposit", amount: 300, date: "2024-03-05T12:00:00Z" },
            { type: "withdrawal", amount: 100, date: "2024-03-15T15:45:00Z" }
        ],
        isAdmin: false
    },
    {
        id: 3,
        firstName: "Charlie",
        lastName: "Brown",
        userName: "charlieb",
        age: 22,
        email: "charlieb@gmail.com",
        password: "cbrown123",
        balance: 300,
        createdAt: "2024-04-01T08:30:00Z",
        transactions: [
            { type: "deposit", amount: 150, date: "2024-04-07T09:30:00Z" },
            { type: "withdrawal", amount: 50, date: "2024-04-12T10:45:00Z" }
        ],
        isAdmin: false
    },
    {
        id: 4,
        firstName: "David",
        lastName: "Wilson",
        userName: "davidw",
        age: 31,
        email: "davidw@gmail.com",
        password: "dwilson567",
        balance: 400,
        createdAt: "2024-05-01T07:00:00Z",
        transactions: [
            { type: "deposit", amount: 250, date: "2024-05-10T08:00:00Z" },
            { type: "withdrawal", amount: 125, date: "2024-05-15T10:15:00Z" }
        ],
        isAdmin: false
    },
    {
        id: 5,
        firstName: "Eve",
        lastName: "Davis",
        userName: "eved",
        age: 27,
        email: "eved@gmail.com",
        password: "edavis789",
        balance: 500,
        createdAt: "2024-06-01T12:00:00Z",
        transactions: [
            { type: "deposit", amount: 300, date: "2024-06-05T13:30:00Z" },
            { type: "withdrawal", amount: 100, date: "2024-06-20T15:30:00Z" }
        ],
        isAdmin: false
    },
    {
        id: 6,
        firstName: "Frank",
        lastName: "Miller",
        userName: "frankm",
        age: 35,
        email: "frankm@gmail.com",
        password: "fmiller001",
        balance: 600,
        createdAt: "2024-07-01T11:15:00Z",
        transactions: [
            { type: "deposit", amount: 500, date: "2024-07-05T12:45:00Z" },
            { type: "withdrawal", amount: 300, date: "2024-07-10T16:30:00Z" }
        ],
        isAdmin: false
    },
    {
        id: 7,
        firstName: "Grace",
        lastName: "Taylor",
        userName: "gracet",
        age: 29,
        email: "gracet@gmail.com",
        password: "gtaylor012",
        balance: 700,
        createdAt: "2024-08-01T10:00:00Z",
        transactions: [
            { type: "deposit", amount: 250, date: "2024-08-05T11:30:00Z" },
            { type: "withdrawal", amount: 125, date: "2024-08-15T14:00:00Z" }
        ],
        isAdmin: false
    },
    // ... Continue with similarly structured users up to id 49
];
