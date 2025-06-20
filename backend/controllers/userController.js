import User from "../model/user.js";

export function createUser(req, res){

    const user = new User(req.body)

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