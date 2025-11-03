const express = require('express')
const cors = require('cors')

const app = express()
const statsRouter = require('./routes/stats')

const PORT = 8080

app.use(cors())
app.use(express.json())

app.use('/stats', statsRouter)

app.listen(PORT, () => {
    console.log('[SERVER] listening')
})
