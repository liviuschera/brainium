import express from 'express';
import bcrypt from 'bcrypt-nodejs';
import cors from 'cors';
import {
  getAllUsers,
  insertUser,
  getUserById,
} from './database/query.database.mjs';

// getAllUsers();
// console.log(getAllUsers());

const app = express();
const port = 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const database = {
  users: [
    {
      id: 111,
      name: 'John Smith',
      email: 'smith@email.com',
      password: 'cheers',
      entries: 0,
      createdAt: new Date(),
    },
    {
      id: 112,
      name: 'Marcy Goldburn',
      email: 'goldburn@email.com',
      password: 'amazing',
      entries: 0,
      createdAt: new Date(),
    },
    {
      id: 113,
      name: 'Wayne',
      email: 'w@e.com',
      password: 'p',
      entries: 0,
      createdAt: new Date(),
    },
  ],
};

app.get('/', (req, res) => {
  res.send(database.users);
});

app.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  // console.log(await getAllUsers());

  if (email && password) {
    const userExists = database.users.find((user) => {
      return user.email === email && user.password === password;
    });
    console.log(userExists);

    if (userExists) {
      res.json(userExists);
    } else {
      res.status(400).json('fail');
    }
  }
});

app.post('/signup', async (req, res) => {
  const { firstName, lastName, email } = req.body;

  const userExists = await insertUser({
    first_name: firstName,
    last_name: lastName,
    email,
    joined: new Date(),
  });

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

app.put('/image', (req, res) => {
  console.log(req.body);

  const userExists = database.users.find((user) => {
    user.entries++;
    return user.id === req.body.id;
  });
  console.log(userExists);
  if (userExists) {
    res.json(userExists);
  } else {
    res.status(404).json("User doesn't exists");
  }
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
