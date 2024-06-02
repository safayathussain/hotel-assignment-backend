import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
export const app = express()

const run = () => {
    app.listen(process.env.PORT, () => {
        console.log(`Example app listening on port ${process.env.PORT}`)
    })
    
}
run()

// middlewares
app.use(express.json())
app.use(cors())


// routes decleration
import userRouter from '../src/routes/User.routes.js'
import itemRouter from '../src/routes/Item.routes.js'
import orderRouter from '../src/routes/Order.routes.js'

app.use('/api/v1/user', userRouter)
app.use('/api/v1/items', itemRouter)
app.use('/api/v1/orders', orderRouter)