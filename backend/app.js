import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import homeRoutes from "./routes/homeRoute.js";
import aboutRoutes from "./routes/aboutRoute.js";
import servicesRoutes from "./routes/servicesRoute.js";
import contactRoutes from "./routes/contactRoute.js";

const app = express();
const PORT = process.env.PORT || 3000;

// For __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../frontend/views"));

// Serve static files
app.use(express.static(path.join(__dirname, "../frontend/public")));

// Use routes
app.use("/", homeRoutes);
app.use("/", aboutRoutes);
app.use("/", servicesRoutes);
app.use("/", contactRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
