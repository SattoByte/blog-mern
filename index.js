import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Working!++');
  //получаем get(req)запрос и возвращяем res.
});



app.listen(4444, (err) => {
  if (err) {
    return console.log(err)
  }
  //слушаем порт 4444 и если нету ошибки то пишем в консоль ОК!
  console.log('Server OK!');
});