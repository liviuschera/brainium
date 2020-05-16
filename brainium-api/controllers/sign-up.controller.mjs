import bcrypt from 'bcryptjs';
import { promisify } from 'util';
import { insertUser } from '../database/query.database.mjs';

export default async function handleSignUp(req, res) {
  const { firstName, lastName, email, password } = req.body;
  try {
    const promisedBcryptGenSalt = promisify(bcrypt.genSalt);
    const promisedBcryptHash = promisify(bcrypt.hash);
    const salt = await promisedBcryptGenSalt(10);
    const hash = await promisedBcryptHash(password, salt);

    const userExists = await insertUser({
      first_name: firstName,
      last_name: lastName,
      email,
      password: hash,
      joined: new Date(),
    });
    console.log('user exists: ', userExists);
    if (userExists) {
      res.json(userExists);
    } else {
      throw new Error('Email already exists.');
    }
  } catch (error) {
    console.error(error.message);
    res.status(400).json('Signup error');
  }
}
