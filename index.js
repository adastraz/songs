const express = require('express')
require('dotenv').config()
const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    const songs = ({id: 1, name: 'Here comes the sun', 
    secret: process.env.SECRET})

    res.status(200).json(songs)
})

port = process.env.PORT || 5000

server.listen(port, () => {
    console.log(`\n***API listening on port ${port}***\n`)
})