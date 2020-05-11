import express from 'express';
import bcrypt from 'bcrypt-nodejs';
import cors from 'cors';
import { getAllUsers, insertUser } from './database/query.database.mjs';

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

app.post('/signin', (req, res) => {
  const { email, password } = req.body;
  // console.log(req.body);

  // console.log(email, password);

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

  try {
    const userExists = await insertUser({
      first_name: firstName,
      last_name: lastName,
      email,
      joined: new Date(),
    });

    if (!userExists) throw Error();

    res.json(userExists);
  } catch (error) {
    res.status(400).json('Signup error');
  }
});

app.get('/profile/:id', (req, res) => {
  const userExists = database.users.find((user) => user.id === +req.params.id);
  if (userExists) {
    res.json(userExists);
  } else {
    res.status(404).json("User doesn't exists");
  }
  console.log(userExists);
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
