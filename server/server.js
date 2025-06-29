import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/Mongodb.js';

const PORT = process.env.PORT || 4000;
const app = express()
// add json middleware
app.use(express.json())
// adding cors in express app
app.use(cors())
await connectDB()

app.get('/', (req, res) => {
    res.send('hello yukti ji')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
// export default app