require('dotenv').config()
const express = require('express');
const connection = require('./connection/connection') 
const bodyParser = require('body-parser');
const app = express()
const PORT = process.env.PORT || 8080

app.use(bodyParser({ extended: true }))

connection()

app.use('/api/role', require('./routes/RoleRoutes'))
app.use('/api/history', require('./routes/HistoryRoutes'))

app.get('/', (req, res) => {
    return res.status(200).json({ success: true, data: 'Home' })
})

app.use(express.static(path.join(__dirname, "./client/build")))
app.get("*", function (req, res){
    res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
    );
});

app.listen(PORT, console.log(`Server isl istening on port: http://localhost:${PORT}`))