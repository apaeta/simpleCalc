import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
  hello: 'JS World',
});
});

app.get("/task2", (req, res) => {
  var arg1 = parseInt(req.query.a,10)
  var arg2 = parseInt(req.query.b,10)
  if (isNaN(arg1)){
  arg1 = 0;
}
if (isNaN(arg2)){
  arg2 = 0;
}
  var sum = arg1 + arg2;
  res.send(sum.toString())
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
