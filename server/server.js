const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../client/home.html"))
})

app.get('/css', function (req, res){
    res.sendFile(path.join(__dirname, "../client/home.css"))
})

// app.get('/assets', function (req, res){
//     res.sendFile(path.join(__dirname, "../assets"))
// })

const haploCtrl = require('./haploCtrl.js')

app.get('/app/region', haploCtrl.getHaploData)

const port = 5000

app.listen(port, console.log(`Jump to hyperspace via ${port}!`))