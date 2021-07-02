import React, {useState} from 'react'
import Signup from './signup'
import SignupSuccess from './signupSuccess'

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false); 
    function submitForm(){
        setIsSubmitted(true);
    }

    return (
        <div>
            {
                !isSubmitted ? <Signup submitForm={submitForm}/> : <SignupSuccess/>
            }
        </div>
    )
}

export default Form
