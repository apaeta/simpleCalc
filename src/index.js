import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
  hello: 'JS World!',
});
});

app.get("/task3", (req, res) => {
  var inputString =req.query.fullname
  var testSplitter = inputString.split(' ')
  var resultStr = 'Invalid fullname'

  if (testSplitter.length <= 3 && testSplitter.length != 0 && testSplitter[0] ){
    var poped = testSplitter.pop()
    testSplitter.unshift(poped)
    resultStr = testSplitter.reduce(function (s,x,i){return s+(i?(' '+x[0]+'.'):x)},'')
  }

  res.send(resultStr)
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
