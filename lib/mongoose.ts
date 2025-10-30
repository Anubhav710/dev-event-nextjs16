import mongoose from "mongoose";

type ConnectionOject = {
  isConnected?: number;
};

const connection: ConnectionOject = {};

export async function connectDB(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to database");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI!);
    connection.isConnected = db.connections[0].readyState;
    console.log("DB is connected");
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
