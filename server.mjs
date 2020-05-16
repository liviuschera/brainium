import { promisify } from 'util';
import express from 'express';
// import bcrypt from 'bcrypt-nodejs';
import bcrypt from 'bcryptjs';
import cors from 'cors';
import {
  getAllUsers,
  insertUser,
  getUserById,
  updateUserEntries,
  getUserLogin,
} from './database/query.database.mjs';

// getAllUsers();
// console.log(getAllUsers());

const app = express();
const port = 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(database.users);
});

app.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExists = await getUserLogin(email);
    if (!userExists) {
      throw new Error(`Unable find: ${email}`);
    }
    const passwordIsValid = await bcrypt.compare(password, userExists.hash);
    if (passwordIsValid) {
      res.json(userExists);
    } else {
      throw new Error('Wrong password');
    }
  } catch (error) {
    console.error(error.message);
    res.status(400).json('Unable to login!');
  }
});

app.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

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
    res.status(400).json('Signup error');
  }
});

app.get('/user/:id', async (req, res) => {
  const userExists = await getUserById(req.params.id);

  if (userExists.length > 0) {
    res.json(userExists);
  } else {
    res.status(404).json("User doesn't exists");
  }
});

app.put('/image', async (req, res) => {
  const { id } = req.body;
  const userExists = await getUserById(id);

  if (userExists) {
    const updateEntry = await updateUserEntries(id);

    if (updateEntry instanceof Error) {
      res.status(404).json('Unable to update user entries (db query failed)');
    } else {
      res.json(updateEntry[0]);
    }
  } else {
    res.status(404).json('Unable to update user entries (no such user)');
  }
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
