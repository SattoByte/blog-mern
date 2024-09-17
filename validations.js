import { body } from 'express-validator';

export const loginValidation = [
  body('email', 'invalid email format').isEmail(),
  body('password', 'password must be atleast 5 characters ').isLength({ min: 5 }),
]

export const registerValidation = [
  body('email', 'invalid email format').isEmail(),
  body('password', 'password must be atleast 5 characters ').isLength({ min: 5 }),
  body('fullName', 'enter Name').isLength({ min: 3 }),
  body('avatarUrl', 'incorrect URL address').optional().isURL(),
]

export const postCreateValidation = [
  body('title', 'Enter article title').isLength({ min: 3 }).isString(),
  body('text', 'Enter article text').isLength({ min: 3 }).isString(),
  body('tags', 'Invalid tag format (please specify array)').optional().isString(),
  body('imageUrl', 'Invalid image link').optional().isString(),
]