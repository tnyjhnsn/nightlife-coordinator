require('dotenv').load()
const express = require('express')
const mongoose = require('mongoose')

const middleware = require('./middleware')
const auth = require('./routes/auth')
const venues = require('./routes/venues')
const routes = require('./routes')

const app = express()

app.use(middleware)

app.use('/auth', auth)
app.use('/venues', venues)
app.use('/*', routes)

/* eslint-disable no-console */
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_URI, { useMongoClient: true })
  .then(() => console.log('MongoDB connection successful'))
  .catch(error => console.error(error))

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
