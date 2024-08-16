const express = require('express')

const users = require("./shopdata.json");
const app = express()
const port = 4000



app.get('/users', (req, res) => {
  res.json(users)
  })
app.get('/users/:id',(req,res) => {
  const id = req.params.id;
  const user = users.find((u)=>u.id ==id);
  return res.json(user);
})
app.set('trust proxy', true); // Trust the reverse proxy
app.get('/', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    res.send(`Your IP address is ${ip}`);
});

app.post('/karan', (req, res)=>{
  const {name, email, password} = req.body;
  const user = {id: users.length + 1, name, email, password};
  users.push(user);
  res.json(user);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})