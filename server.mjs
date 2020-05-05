import express from 'express';

const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const database = {
  users: [
    {
      id: 123,
      name: 'John Smith',
      email: 'smith@email.com',
      password: 'cheers',
      entries: 0,
      createdAt: new Date(),
    },
    {
      id: 456,
      name: 'Marcy Goldburn',
      email: 'goldburn@email.com',
      password: 'amazing',
      entries: 0,
      createdAt: new Date(),
    },
  ],
};

app.get('/', (req, res) => {
  res.send('Homepage');
});

app.post('/signin', (req, res) => {
  const { email, password } = req.body;
  //   console.log(email, password);

  if (email && password) {
    const canLogin = database.users.find((user) => {
      return user.email === email && user.password === password;
    });
    //  console.log(canLogin);

    if (canLogin) {
      res.json('login succesfull');
    } else {
      res.status(400).json('Error logging in');
    }
  }
});

app.post('/register', (req, res) => {
  //   console.log({ ...req.body, ...{ createdAt: new Date() } });

  database.users.push({ ...req.body, ...{ createdAt: new Date() } });
  res.json(database.users);
});

app.get('/profile/:id', (req, res) => {
  const userExists = database.users.find((user) => user.id === +req.params.id);
  if (userExists) {
    // res.json(`req.params: <code>${userExists}</code>`);
    res.json(userExists);
  } else {
    res.status(404).json("User doesn't exists");
  }
  console.log(userExists);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
