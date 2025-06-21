import Student from "../model/student.js";


export  function getStudents(req,res){
    
   Student.find().then(
    (students)=>{
    
        res.json(students);

    }
   ).catch(()=>{

     res.json({  
        message : "failed to fetch student"
     })

   })
}


export  function saveStudents(req,res){
    if(req.user == null){
        res.status(403).json(
            {
                message : "please login to create a student"
            }
        ) 
        return
    }
    if(req.user.role != "admin"){
        res.status(403).json(
            {
                message : "please login as an admin to create student"
            }
        )
        return
    }
    

    const student = new Student({

        name : req.body.name,
        age : req.body.age,
        email : req.body.email
    });

student.save().then(
    ()=>{
        res.json({
            message : "student save successfully"
        })
    }
).catch(
    ()=>{
        res.json({
            message : "failed to save"
        })
    }
)

}