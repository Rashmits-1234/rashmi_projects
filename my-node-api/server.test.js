const request = require("supertest");
const app = require("./server");

describe("API Tests", () => {
    let testUserId;

    test("GET / should return 200 and message", async () => {
        const response = await request(app).get("/");
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Hello, World!");
    });

    test("POST /users should create a new user", async () => {
        const newUser = { name: "John Doe", email: "john@example.com" };
        const response = await request(app).post("/users").send(newUser);

        expect(response.status).toBe(201);
        expect(response.body.name).toBe("John Doe");

        testUserId = response.body.id;
    });

    test("POST /users should return 400 if name or email is missing", async () => {
        const response = await request(app).post("/users").send({});
        expect(response.status).toBe(400);
        expect(response.body.error).toBe("Name and email are required");
    });

    test("PUT /users/:id should update an existing user", async () => {
        if (!testUserId) throw new Error("No user ID available for update test");

        const updatedUser = { name: "John Updated", email: "john.updated@example.com" };
        const response = await request(app).put(`/users/${testUserId}`).send(updatedUser);

        expect(response.status).toBe(200);
        expect(response.body.name).toBe("John Updated");
        expect(response.body.email).toBe("john.updated@example.com");
    });

    test("DELETE /users/:id should remove a user", async () => {
        if (!testUserId) throw new Error("No user ID available for delete test");

        const response = await request(app).delete(`/users/${testUserId}`);
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("User deleted successfully");
    });

    test("PUT /users/:id should return 404 for a non-existing user", async () => {
        const response = await request(app)
            .put("/users/999")
            .send({ name: "Fake User", email: "fake@example.com" });

        expect(response.status).toBe(404);
        expect(response.body.error).toBe("User not found");
    });

    test("DELETE /users/:id should return 404 for non-existent user", async () => {
        const response = await request(app).delete("/users/999");
        expect(response.status).toBe(404);
        expect(response.body.error).toBe("User not found");
    });
});
