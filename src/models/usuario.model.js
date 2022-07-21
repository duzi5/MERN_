const mongoose = required('mongoose')
const bcryped = required('bcrypy')


const DataSchema = new mongoose.Schema({
    nome: String,
    email:String,
    tipo:{type: Number, default:1},
    senha:String,
    },{
        timestamps:true
    })
