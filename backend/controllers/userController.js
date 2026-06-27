import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import asyncHandler from '../middlewares/asyncHandler.js'
import createToken from '../utils/createToken.js'