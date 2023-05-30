const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const PORT = 4040

dotenv.config()
app.use(bodyParser.json())
app.use(cors())

const UserSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    price: Number
})
const UserModel = mongoose.model('Users', UserSchema)

DB_CONNECTION = process.env.DB_CONNECTION
DB_PASSWORD = process.env.DB_PASSWORD
mongoose.connect(DB_CONNECTION.replace("<password>", DB_PASSWORD))
    .then(() => console.log("mongodb connected"))
app.get('/users', async (req, res) => {
    const users = await UserModel.find()
    res.status(200).send(users)
})
app.get('/users/:id', async (req, res) => {
    const id = req.params.id
    const user = await UserModel.findById(id)
    res.status(200).send(user)
})
app.delete('/users/:id', async (req, res) => {
    const id = req.params.id
    const deleteUser = await UserModel.findByIdAndDelete(id)
    res.status(200).send("deleted")
})
app.post('/users', async (req, res) => {
    const newUser = new UserModel({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        price: req.body.price
    })
    await newUser.save()
    res.status(200).send("posted")
})
app.put('/users/:id', async (req, res) => {
    const id = req.params.id
    const updated = await UserModel.findByIdAndUpdate(id,{
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        price: req.body.price
    })
    res.status(200).send("edit succeful")
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})