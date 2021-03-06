import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        fullname:'',
        email:'',
        phone:'',
        password:'',
        cpassword:'',
        city:'',
        state:'',
        vehicleno:''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange =e => {
        const{ name, value }=e.target;
        setValues({
            ...values,
            [name]:value
        });
    };
    
    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);
    };

    useEffect(() => 
        { if (Object.keys(errors).length === 0 && isSubmitting) 
            {
                alert("You have been registered successfully")
                window.location.href = '/login';
            }
        }
    );

    return {handleChange,values, handleSubmit, errors}
}
export default useForm;