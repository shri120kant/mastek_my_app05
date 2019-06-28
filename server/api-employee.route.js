const express = require('express');
const app=express();
const apiempRouter=express.Router();

let Employee = require('./employee');
//get all employees
apiempRouter.route('/allemp').get((req,resp)=>{
   // resp.send("<h1>Called all Employees</h1>");
   Employee.find((err,data)=>{
       if(err){
           resp.send("Failure");
       }
       resp.send(data);
   });
});
//get employee by empId
apiempRouter.route('/:empId').get((req,resp)=>{
    //resp.send("<h1>Called Employee by ID</h1>");
    let p_empId=req.params.empId;
    Employee.find({empId:p_empId},(err,data)=>{
        if(err){
            resp.send("Fail to load data for:"+p_empId);
        }
        resp.send(data);
    });
});
//get employee by empName
apiempRouter.route('/ename/:empName').get((req,resp)=>{
    //resp.send("<h1>Called Employee by Name</h1>");
    let p_empName=req.params.empName;
    Employee.find({empName:p_empName},(err,data)=>{
        if(err){
            resp.send("Fail to load data for:"+p_empName);
        }
        resp.send(data);
    });
});
//add employee
apiempRouter.route('/addEmp').post((req,resp)=>{
    let body_employee = new Employee(req.body); 
   // resp.send(employee);
   body_employee.save().then(
       ()=>resp.send("New Employee added to database"),
       (err)=>resp.send("Failure while ading employee details!")
   );
});
//delete employee
apiempRouter.route('/delete/:empId').delete((req,resp)=>{
    //resp.send("<h1>Called delete Employee by ID</h1>");
    let p_empId=req.params.empId;
    Employee.findOneAndDelete({empId:p_empId},(err,data)=>{
        if(err){
            resp.send("Fail to delete data for:"+p_empId);
        }
        resp.send(p_empId+":removed");
    });
});
// update employee
apiempRouter.route('/update/:empId/:desig').put((req,resp)=>{
    //resp.send("<h1>Called update Employee by ID</h1>");
    let p_empId=req.params.empId;
    let p_desig=req.params.desig;
    Employee.findOneAndUpdate({empId:p_empId},{designation:p_desig},(err,data)=>{
        if(err)resp.send("Failed to update");
        resp.send("Updated records for "+p_empId);
    });
});

module.exports=apiempRouter;