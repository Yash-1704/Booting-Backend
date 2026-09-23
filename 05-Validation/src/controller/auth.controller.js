export async function register(req,res){
    const{email, phone, password} =  req.body;

    let errors = []

    if(!email){
        errors.push({
            field:email,
            message:"Email is required"
        })
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(!emailRegex.test(email)){
        errors.push({
            field:email
        })
    }
    if(!phone){
        errors.push({
            field:phone,
            message:"Phone Number is required"
        })
    }
    if(!password){
        errors.push({
            field:passowrd,
            message:"Password is required"
        })
    }


}
