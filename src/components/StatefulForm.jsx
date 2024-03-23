import { useState } from "react";


const StatefulForm = () => {
    const [email, setEmail] = useState(null);
    const [name, setName] = useState('Badar Hossain');
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');


    const handleSubmit = (e) =>{
        e.preventDefault();
        if(password.length<6){
            setError('Password Length is less than length')
        }
        else{
            setError('')
            console.log(name,email,password);
        }
    }



    const handleEmailChange=  e => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value)
    }

    const handleNameChange = e =>{
        setName(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name="name"/>
                <br />
                <input 
                onChange={handleEmailChange}
                type="email" name="email"/>
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" required/>
                <br />
                <button>Submit</button>
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;