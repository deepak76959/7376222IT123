const express = require('express')
const app = express()
const PORT = 3000
app.get('/',(req, res)=> res.send('Hello World!-7376222IT123 DEEPAK S'))        
app.get('/deepak',(req, res)=> res.send('Hello World!-7376222IT123 DEEPAK S'))  
app.get('/godson',(req, res)=> res.send('Hello World!-7376222IT151 GODSON '))              
app.listen(PORT, () => console.log(
    `Example app listening at http://localhost:${PORT}`))        