const express= require('express');
require('dotenv').config();
const app=express();
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/login', (req, res) => {
    res.send('<h1>please login at chai aur code</h1>'); 
});

app.listen(process.env.PORT, () => {
  console.log('Server is running on port 3000');
});
