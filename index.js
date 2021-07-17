let express = require('express');
let app = express();

const port = 3000

app.get('/', (req, res) => {
  console.log('----Hello World!')
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})