function generateCode(){
    const mainString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
    let code = ''
    for(let i = 0; i<6; i++){
        code += mainString.charAt(Math.floor(Math.random()*62))
    }
    return code
}

export default generateCode

