import express from 'express';
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose';

mongoose
  .connect('mongodb+srv://admin:wwwwww@cluster0.6oxue.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('DB ok'))
  .catch((err) => console.log('DB Error', err))

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Working!++');
  //getting get(req) request to get response
});

app.post('/auth/login', (req, res) => {
  console.log('req: ', req.body); //testint login and password here

  if (req.body.email === 'test@mail.com') {
    const token = jwt.sign({
      email: req.body.email,
      fullName: 'Neo',
    },
      'secret 123',
    ); //generate token
  }

  res.json({ //checking POST request to /auth/login to get answer from server
    success: true,
    token,
  });
});

app.listen(4444, (err) => {
  if (err) {
    return console.log(err)
  }
  //listen to port 4444 and if there is no error, write OK in the console!
  console.log('Server OK!');
});