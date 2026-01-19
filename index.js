const express=require('express');
const app=express();
const path=require('path');
const port=3000;

app.use(express.static(path.join('public')));
app.get('/',(req,res)=>{
const filePath='/users/rahul/docs/report.pdf'
console.log("basename:"+path.basename(filePath));
console.log("dirname :"+path.dirname(filePath));
console.log("extname:"+path.extname(filePath));
const parsed=path.parse(filePath);
console.log(parsed);

// other way to write a path.join if not use __dirname then show a relative path.they are return both absolute and relative path
const fullPath=path.join(__dirname,'public','images','avatar.jpg');
console.log(fullPath);


// resolve : they are show absolutepath only mention public folder name. only return absolutepath
const absolutePath=path.resolve('public','image.jpg');
console.log("absolute path :"+absolutePath);
res.send("path module");
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})