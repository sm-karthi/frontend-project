import mongoose from "mongoose";

const uri = process.env.MONGODB_URI as string;
const dbName = "blogs";

class Database {
    private static instance: Database;
    private constructor() { }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public async connect(): Promise<typeof mongoose> {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(uri, { dbName });
            console.log(`MongoDB connected (${dbName})`);
        }
        return mongoose;
    }


    public async close(): Promise<void> {
        if (mongoose.connection.readyState) {
            await mongoose.disconnect();
            console.log(`MongoDB connection closed (${dbName})`);
        }
    }
}

export const db = Database.getInstance();
