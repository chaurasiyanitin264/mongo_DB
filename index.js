const express = require("express");
const app = express();
const port = 8000;
const EmpRoute = require("./routes/empRoutes");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/chaurasiya").then(() => {
    console.log("db connected");
})

// mongoose.connect("mongodb://127.0.0.1:27017/cybrom").then(()=>{
//     console.log("db connected")
// })

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json());

app.set("view engine", "ejs")
app.use("/", EmpRoute);
app.listen(port, () => {
    console.log(`server run on ${port}`)
})
