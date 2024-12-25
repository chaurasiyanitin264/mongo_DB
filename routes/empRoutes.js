const express=require("express")
const route=express.Router();
const EmpController=require("../controller/empController")

route.get("/",EmpController.empHome);
route.get("/insert",EmpController.empInsert);
route.get("/display",EmpController.empDisplay);
route.get("/del",EmpController.empDataDelete);
route.post("/datasave",EmpController.EmpDataSave);
route.get("/recdel",EmpController.DeleteRecord)


module.exports=route