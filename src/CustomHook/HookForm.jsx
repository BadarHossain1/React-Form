import useInputState from "./UseInputState";


const HookForm = () => {

    const nameState = useInputState('Badar')
    const handleSubmit = e =>{
        e.preventDefault();
        // console.log(name)
        console.log(nameState.value)
    }
    return (
        <div>
            <div>
            <form onSubmit={handleSubmit}>
            <input {...nameState}  type="text" name="name"/>
                <br />
                <input type="email" name="email"/>
                <br />
                <input type="password" name="password"/>
                <br />
                <button>Submit</button>
            </form>
        </div>
        </div>
    );
};

export default HookForm;