const express=require('express');
const cors=require('cors');
const {db} =require('./db/db');
// const {readdirSync}=require('fs');
const vendorRouter = require("./routes/vendorRoutes");
const customerRouter=require("./routes/CustomerRoutes");
// const blogRouter = require("./routes/blogRoutes");
const app=express();

require('dotenv').config();

const PORT=process.env.PORT

//middlewares

app.use(express.json())
app.use(cors());


//routes

// readdirSync('./routes').map((route)=> app.use('/api/v1', require('./routes/'+ route)))
app.use("/vendors",vendorRouter);
app.use("/customers",customerRouter);
// app.use("/blogs",blogRouter);
app.get("/", (req, res) => {
    res.send("Success");
});

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const server=()=>{
    db()
    app.listen(PORT,()=>{
        console.log('Server is running on port',PORT);
    })
    
}

server()