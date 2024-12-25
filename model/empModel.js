const mongoose=require("mongoose");
const empSchema=new mongoose.Schema({
    empno:Number,
    name:String,
    city:String,
    sallery:Number
})
module.exports=mongoose.model("NITIN",empSchema)