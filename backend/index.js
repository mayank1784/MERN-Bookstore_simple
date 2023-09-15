import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
    origin:'https://mern-bookstore-simple.vercel.app/',
    methods: ['GET','POST','PUT','DELETE'],
    allowedHeaders: ['Content-Type']
}));

app.use("/books",booksRoute);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("App connected to database");
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

const port = process.env.PORT || 8000;
