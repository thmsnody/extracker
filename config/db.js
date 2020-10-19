const mongoose = require('mongoose')
require('dotenv').config({ path: './config/.env' })

try {
  mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  console.log('MongoDB Connected...')
} catch (err) {
  console.error(err)
}
