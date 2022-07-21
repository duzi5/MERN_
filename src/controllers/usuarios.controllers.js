


module.exports = { 

    index(req, res){
        res.json({message: "funcionou opra"})
    },
    create(req, res){ 
        let msg = "cheguei aqui"
        res.json({msg:msg})
    }
}