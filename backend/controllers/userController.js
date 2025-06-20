import User from "../model/user.js";
import bcrypt from "bcrypt"

export function createUser(req, res){

const passwordHash = bcrypt.hashSync(req.body.password,10)

    const userData = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        password : passwordHash,
        phone : req.body.phone
    }

    const user = new User(userData)

    user.save().then(
        ()=>{
            res.json({
                message : "user create sucessfully"
            })
        }
    ).catch(
        ()=>{

            res.json({
                message : "faild to create user"
            })
        }
    )

}


export function loginUser(req, res){ 

    const email = req.body.email
    const password = req.body.password

    User.findOne(
        {
            email : email
        }
    ).then(
        (user)=>{
             if(user == null){
                res.status(404).json({
                    message : "user not found"
                })
               
             }else{
                const isPasswordCorrect = bcrypt.compareSync(password,user.password)
                if(isPasswordCorrect){
                    res.json({
                        message : "Login Successful"
                    })
                }else{
                    res.status(403).json({
                        message : "Incorrect password"
                    })
                }
             }
        }
    )
}