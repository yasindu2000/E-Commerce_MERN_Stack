import User from "../model/user.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import axios from "axios";
dotenv.config()



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

                 const token = jwt.sign(
                    {
                        email : user.email,
                        firstName : user.firstName,
                        lastName : user.lastName,
                        role : user.role,
                        isBlocked : user.isBlocked,
                        isEmailVerified : user.isEmailVerified,
                        image : user.image

                    },
                    process.env.JWT_SECRET
                 )


                    res.json({
                        token : token,
                        message : "Login Successful",
                        role : user.role
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

export function getUser(req,res){
    if(req.user == null){
        res.status(404).json({
            message : "User not found"
        })
    }else{
        console.log(req.user)
        res.json(req.user)
    }
}

export function isAdmin(req){
    if(req.user == null){
        return false
    }

    if(req.user.role == "admin"){
        return true
    }else{
        return false
    }
}

export async function googleLogin(req, res) {
	const googleToken = req.body.token;

	try {
		const response = await axios.get(
			"https://www.googleapis.com/oauth2/v3/userinfo",
			{
				headers: {
					Authorization: `Bearer ${googleToken}`,
				},
			}
		);

        const user = await User.findOne({
            email: response.data.email,
        });

        if(user !=null){
            const token = jwt.sign(
                {
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    role: user.role,
                    isBlocked: user.isBlocked,
                    isEmailVerified: user.isEmailVerified,
                    image: user.image,
                },
                process.env.JWT_SECRET
            );

            res.json({
                token: token,
                message: "Login successful",
                role: user.role,
            });
        }else{
            const newUser = new User({
                email: response.data.email,
                firstName: response.data.given_name,
                lastName: response.data.family_name,
                image: response.data.picture,
                role: "user",
                isBlocked: false,
                isEmailVerified: true,
                password: "123"
            });

            await newUser.save();

            const token = jwt.sign(
                {
                    email: newUser.email,
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,
                    role: newUser.role,
                    isBlocked: newUser.isBlocked,
                    isEmailVerified: newUser.isEmailVerified,
                    image: newUser.image,
                },
                process.env.JWT_SECRET
            );

            res.json({
                token: token,
                message: "User created successfully",
                role: newUser.role,
            });
        }

	} catch (error) {
		console.error("Error fetching Google user info:", error);
		res.status(500).json({
			message: "Failed to authenticate with Google",
		});
	}
}