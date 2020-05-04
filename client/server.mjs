import path from 'path';
import express from 'express';
const app = express();
const port = 5000;

const t = path.resolve();
console.log(t);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.resolve() + '/public'));

console.log(path.resolve(path.resolve(), '/public'));
console.log(path.resolve());
// app.get('/', (req, res) => {
//   res.send('Homepage');
// });

// app.get('/profile', (req, res) => {
//   console.log(req.body);

//   res.send('getting users');
// });

// app.post('/profile', (req, res) => {
//   console.log(req.body);

//   res.send(req.body);
// });

app.listen(port, () => console.log(`Server is running on port: ${port}`));
