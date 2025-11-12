const express = require("express");
const app = express();
const path = require("path");
const { MongoClient, ObjectId } = require("mongodb");

const PORT = 5050;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const MONGO_URL = "mongodb+srv://zain:deadlyfire@stack.joiua6t.mongodb.net";
const DB_NAME = "Docker-AWS-Node";

async function withDb(callback) {
    const client = new MongoClient(MONGO_URL);
    try {
        await client.connect();
        const db = client.db(DB_NAME);
        return await callback(db);
    } finally {
        await client.close();
    }
}

//GET all users
app.get("/getUsers", async (req, res) => {
    try {
        const data = await withDb(async (db) => {
            return db.collection("users").find({}).toArray();
        });
        res.json(data);
    } catch (error) {
        console.error("Failed to fetch users", error);
        res.status(500).send({ message: "Unable to fetch users." });
    }
});


//Static informational routes
app.get("/about", (_req, res) => {
    res.send("Welcome to the Docker AWS Node demo service. Explore users, add new ones, or fetch a random highlight!");
});

app.get("/home", (_req, res) => {
    res.send("Home base for the Docker AWS Node demo service — your gateway to user adventures.");
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});