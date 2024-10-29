import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import useRouter from "./routes/userRoute.js"
import router from "./routes/userRoute.js";

// Load environment variables from .env file
dotenv.config();

const app = express(); // Create an Express application
const PORT = process.env.PORT || 3000; // Define the port

// Middleware to parse JSON requests
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api/v1/user' ,router);

// Start the server
app.listen(PORT, () => {
  connectDB(); // Connect to the database
  console.log(`Server is running on http://localhost:${PORT}`);
});
