
const express = require('express')
const app = express();
const fs=require('fs')
app.use((req,res,next)=>{
    console.log(req.method, req.path);
    next();
}
)
let count = 0;
app.get("/",(req,res)=>{
const data=fs.readdirSync('home')
res.send(data)
})
app.get("/public",(req,res)=>{
    const data=fs.readdirSync('home/public')
    res.send(data)
    })
    app.get("/public/folder1",(req,res)=>{
        const data=fs.readdirSync('home/public/folder1')
        res.send(data)
        })
app.get("/hello", (req, res) => {
    try {
        count++;
        res.send({
            count
        })
    } catch (ex) {
        console.log(ex.massege)
    }

})
app.get("/hello/:user",(req, res)=>{
    const user=req.params.user;
    return res.send(
        {
            massege:'hello'+ user
        }
    )
})


app.listen(3000,()=>{
    console.log("app on http://localhost:3000")
})


