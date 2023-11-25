import mongoose from "mongoose";

mongoose.set("strictQuery", false);

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI!);
    console.log(`Database connected ${connection.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};
