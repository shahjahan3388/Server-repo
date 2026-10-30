const http=require("http")


const app=http.createServer((req,res)=>{
    res.end('server is running and we are learning')
})

app.listen(4000,()=>{
    console.log('server is runing on port number 4000');
    
})