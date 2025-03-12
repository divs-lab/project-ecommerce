import mongoose from "mongoose"; // ✅ Use ES6 import

const connectDB = async (url) => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Connected to the database");
    } catch (error) {
        console.error("❌ Error connecting to the database:", error);
        process.exit(1); // Exit process if connection fails
    }
};

export default connectDB;
