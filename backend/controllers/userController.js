import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

export const addUser = asyncHandler(async (req, res) => {
  const {
    first_name,
    last_name,
    email,
    gender,
    phone_number,
    address,
  } = req.body;
  const user = await User.create({
    first_name,
    last_name,
    email,
    gender,
    phone_number,
    address,
  });

  if (user) {
    res.status(201).json({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      gender: user.gender,
      phone_number: user.phone_number,
      address: user.address,
    });
  } else {
    res.status(400);
  }
});

export const getUsers = asyncHandler(async (req, res) => {
  // const pageSize = 1;
  // const page = Number(req.query.pageNumber) || 1;
  // const users = await User.find({})
  //   .limit(pageSize)
  //   .skip(pageSize * (page - 1));
  const users = await User.find({});
  res.json(users);
});
