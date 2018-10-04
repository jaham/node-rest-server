const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('./config/config')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())




app.get('/', (req, res) => {
    res.json('hello')
})

app.post('/usuario', (req, res) => {

    let body = req.body

    if (body.nombre === undefined) {
        res.status(400).json({ descripcion: "el nombre es nesesario" })
    } else {
        res.json(body)
    }
})

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({ id })
})

app.delete('/usuario', (req, res) => {
    res.json('get usuario delete')
})


app.listen(process.env.PORT, () => {
    console.log('escuchando puerto 3000')
})