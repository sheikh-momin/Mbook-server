const express = require ('express')
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('simple mybook server running')
})

app.listen(port, ()=> {
  console.log(`simple not server running on port ${port}`)
})