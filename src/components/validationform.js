export default function Validationform(values) {
    let errors = {}
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    var vehicle= /^[A-Z]{2}\s[0-9]{2}\s[A-Z]{2}\s[0-9]{4}$/;
    if(!values.fullname.trim()){
        errors.fullname = "Name required"
    }
    if(!values.email){
        errors.email = "Email required"
    }
    if(!values.phone){
        errors.phone = "Phone Number required"
    } else if(values.phone.length!==10){
        errors.phone = "Phone Number needs to be exactly 10 digits"
    }
    if(!values.password){
        errors.password = "Password required"
    } else if(values.password.length<8){    
        errors.password = "Password needs to be at least 8 characters"
    } else if(!values.password.match(decimal)){
        errors.password = "Password must contain atleast one uppercase letter, one lowercase letter, one special character and one digit"
    }
    if(!values.cpassword){
        errors.cpassword = "Password required"
    } else if(values.cpassword !== values.password){
        errors.cpassword = "Passwords do not match"
    }
    if(!values.city){
        errors.city = "City required"
    }
    if(!values.state){
        errors.state = "State required"
    }
    if(!values.vehicleno){
        errors.vehicleno = "Vehicle Number required"
    } else if(!values.vehicleno.match(vehicle)){
        errors.vehicleno= "Incorrectly formatted (Hint: HR 26 DQ 5551)"
    }

    return errors;
}
