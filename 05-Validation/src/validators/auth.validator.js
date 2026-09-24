import {body,validationResult} from 'express-validator'

export const registerValidator = [
    body("email")
        .exists().withMessage("Email is required")
        .isEmail().withMessage("Invalid Email"),
    body("phone")
        .exists().withMessage("Phone Number is required")
        .isMobilePhone('en-In').withMessage("Invalid Phone Number"),
    body("password")
        .exists().withMessage("Passowrd is Required")
        .trim().isLength({min:6}).withMessage("Password must be at least 6 characters long"),
    (req,res,next)=>{
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                message: "Inavlid Request",
                errors: errors.array()
            })
        }

        next()
    }
]