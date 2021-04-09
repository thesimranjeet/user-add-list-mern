import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('DB connected');
  } catch (error) {
    console.log('Error in DB connect');
  }
};

export default connectDB;
