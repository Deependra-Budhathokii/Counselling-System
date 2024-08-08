import mongoose from "mongoose";

export default async () => {
  try {
    const DB_OPTIONS = {
      dbName: process.env.DBNAME,
      user: process.env.DBUSERNAME,
      pass: process.env.DBPASSWORD,
      authsource: process.env.DBAUTHSOURCE,
    };

    // Establishing connection with db server
    await mongoose.connect(process.env.DATABASE_URL, DB_OPTIONS);
    console.log("connected successfully");
  } catch (error) {
    console.log(`db_Connect_err`, error);
  }
};
