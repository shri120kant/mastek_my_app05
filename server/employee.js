const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//Step 2: create a collection using a schema
//Mongoose allows us to work with collection as an object
//it acts as an ORM
//new Schema{{attributes in document},{name of collection}}
var Employee=new Schema({
    empId:{
        type:Number
    },
    empName:{
        type:String
    },
    designation:{
        type:String
    }
},{
    collection: 'employee'
});
module.exports=mongoose.model("Employee",Employee);
//to access ypur document as object in mongodb
//we call mongoose.model(""Employee",Employee")
/*instead of reading individual data it will read as object of employee for ex
employee-object
empId             1001
empName           Shrikant
designation       Trainee
the above is the structure of schema that we created
and it will show us the data in the following schema
*/