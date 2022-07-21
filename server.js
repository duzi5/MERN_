const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')
const routes = require('./src/routes')

const app = express()

mongoose.connect('mongodb+srv://duzisnetto:QJcKLe1aeYaz4mau@cluster0.z18glvu.mongodb.net/?retryWrites=true&w=majority', 
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }, 
    function (error){
       if (error){ 
            console.log("Deu errado" + error)
       }else{
           console.log("Banco de dados não-relacional conectado")
       }
    }
)



app.use(cors())
app.use(cookieParser())
app.use(express.json())




app.use(routes)


app.listen(3000, function(){
console.log(`servidor funcionando na porta 3000`)
})







