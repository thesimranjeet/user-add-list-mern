import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/db.js';
// import { connect } from 'mongoose';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);
app.get('/', (req, res) => {
  res.send('Api is running bro!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
