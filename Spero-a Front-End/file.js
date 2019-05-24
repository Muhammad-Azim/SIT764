var express = require('express')
var app = express()
var xlsxtojson = require("xlsx-to-json")

app.use(express.static(__dirname + ''))

app.get('/',function(req, res){
    res.send('Hello world')
})

app.post('/',function(req,res){
    xlsxtojson({
        input: "/De-identified student comments.xlsx", //input xlsx
        output: "output.json", //output json
        lowerCaseHeaders:true
    },function(err, result){
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
})

app.listen(3000)