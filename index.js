const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.use(express.static(`${__dirname}/dist`))

app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.hmtl`))

app.listen(port, () => console.log(`app is listening on port ${port}`))