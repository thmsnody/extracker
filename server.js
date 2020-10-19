const express = require('express')
const path = require('path')
require('./config/db')
const app = express()

app.use(express.json())

app.use('/expense', require('./routes/expenseRoutes'))
app.use(express.static(path.join(__dirname, 'client/build')))
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server running on port ${port}`))
