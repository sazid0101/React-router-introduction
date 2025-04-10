import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error) 
    return (
        <div>
            <h2>{error.status || error.statusText}</h2>
            <Link to='/'><button>Back</button></Link>
            
        </div>
    );
};

export default Error;