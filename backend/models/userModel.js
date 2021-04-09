import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
  },
  gender: {
    type: String,
  },
  phone_number: {
    type: String,
  },
  address: {
    type: String,
  },
});

const User = mongoose.model('User', userSchema);

export default User;
