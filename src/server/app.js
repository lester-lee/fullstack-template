const express = require("express");
const app = express();

// Simple logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status ?? 500).send(err.message ?? "Internal server error.");
});

// Default to 404 if no route matched
app.use((req, res) => {
  res.status(404).send(`Route ${req.method} ${req.originalUrl} not found.`);
});

module.exports = app;
