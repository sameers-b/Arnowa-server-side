const express = require('express')
const cors = require('cors')

const connectDB = require('./config/db')

const app = express()
app.use(cors())
app.use(express.json())

// connect database
connectDB()

// routes
const authRouter = require('./routes/auth.route')
app.use('/api',authRouter)

// server
const PORT = 8080;
app.listen(PORT,()=>{
   console.log(`Server listening on ${PORT}`);
})