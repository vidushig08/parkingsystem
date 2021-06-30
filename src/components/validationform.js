export default function Validationform(values) {
    let errors = {}
    if(!values.fullname.trim()){
        errors.fullname = "Name required"
    }
    if(!values.email){
        errors.email = "Email required"
    }
    if(!values.phone){
        errors.phone = "Phone Number required"
    } else if(values.phone.length!=10){
        errors.phone = "Phone Number needs to be exactly 10 digits"
    }
    if(!values.password){
        errors.password = "Password required"
    } else if(values.password.length<8){    
        errors.password = "Password needs to be at least 8 characters"
    } else if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]$/.test(values.password)){
        errors.password = "Password must contain atleast one uppercase letter, one lowercase letter, one special character and one digit"
    }
    if(!values.cpassword){
        errors.cpassword = "Password required"
    } else if(values.cpassword !== values.password){
        errors.cpassword = "Passwords do not match"
    }

    return errors;
}
