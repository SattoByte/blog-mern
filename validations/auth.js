import { body } from 'express-validator';

export const registerValidation = [
  body('email', 'invalid email format').isEmail(),
  body('password', 'password must be atleast 5 characters ').isLength({ min: 5 }),
  body('fullName', 'enter Name').isLength({ min: 3 }),
  body('avatarUrl', 'incorrect URL address').optional().isURL(),
]