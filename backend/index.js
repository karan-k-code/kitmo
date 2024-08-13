const express = require('express')

const users = require("./shopdata.json");
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World! karan')
})

app.get('/users', (req, res) => {
  res.json(users)
  })
app.get('/users/:id',(req,res) => {
  const id = req.params.id;
  const user = users.find((u)=>u.id ==id);
  return res.json(user);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})