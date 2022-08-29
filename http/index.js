const http=require('http')
const fs=require('fs')

const server=http.createServer((req,res)=>{
  
        const data=fs.readdirSync('/home')
      console.log(data)
        res.end('hello')
    
})

server.listen(3020, ()=>{
console.log("hello 3020")
})