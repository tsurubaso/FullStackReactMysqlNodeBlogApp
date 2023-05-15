import express from "express"
const app = express()

app.use(express.json())



app.get('/test/', function(req, res) {
    res.json({data:"it works"})}) 
    
app.listen(8800,()=>{
    console.log("listening on 8800")
})

