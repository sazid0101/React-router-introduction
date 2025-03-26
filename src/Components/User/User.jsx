import { Link } from "react-router-dom";

const User = ({user}) => {
    const myStyle={
        border: '2px solid red',
        margin:'2px'
    }
    const {name,id}=user
    return (
        <div style={myStyle}>
            <h2>name: {name}</h2>
            
            <Link to= {`/user/${id}`}>
            <button>Click Me</button>
            </Link>
        </div>
    );
};

export default User;