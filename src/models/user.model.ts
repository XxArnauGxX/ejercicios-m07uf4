// Mongoose schema and model definition for the User entity.
// Defines the structure of user documents in the database.

import mongoose from 'mongoose';
import { IUser } from '../types/user.interface';

export interface IUserModel extends IUser, mongoose.Document {}

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  blocked: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export const UserModel = mongoose.model<IUserModel>('User', userSchema);
