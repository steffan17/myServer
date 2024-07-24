const express = require('express')
const app = express()
const port = process.env.PORT || 3033
const bodyParser = require('body-parser')

const apiRouter = require(`./router/api`)

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/', apiRouter)

app.get('/', (req, res)=>{
    //console.log(req)
    console.log('odebrano połączenie')
    res.send(`This is server...`)
})

app.use((req, res) => {
    res.status(404)
    res.send('404')
})

app.listen(port, ()=>console.log(`It's working on port: ${port}`))