const EmpModel = require("../model/empModel")
const empHome = (req, res) => {
    res.render("Home");
}

const empInsert = (req, res) => {
    res.render("Insert");
}

const empDisplay = async (req, res) => {

    const MyData = await EmpModel.find();
    console.log(MyData);
    res.render("Display", { Data: MyData });
}

const empDataDelete = async (req, res) => {
    const MyData = await EmpModel.find();
    console.log(MyData);
    res.render("RecordDelete", { Data: MyData });
}

const EmpDataSave = (req, res) => {
    const { empno, nm, ct, sal } = req.body;
    console.log(req.body);
    EmpModel.create({
        empno: empno,
        name: nm,
        city: ct,
        sallery: sal
    })
    // res.send("ok");

    res.render("Insert");
    // console.log(empno)
}

const DeleteRecord = async (req, res) => {
    const MyId = req.query.id;
    console.log(MyId);
    await EmpModel.findByIdAndDelete(MyId);
    const MyData = await EmpModel.find();
    // console.log(MyData);
    res.render("RecordDelete", { Data: MyData });
    // res.render("RecordDelete")
}


module.exports = {
    empHome,
    empInsert,
    empDisplay,
    empDataDelete,
    EmpDataSave,
    DeleteRecord

}