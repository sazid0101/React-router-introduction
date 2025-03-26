import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData()
    // console.log(dataLoad)
    const {name,email,address} =user
    const myStyle={
        border: '2px solid green',
        margin:'2px'
    }
    return (
        <div style={myStyle}>
            <h4>User Details: {name}</h4>
            <p>Email: {email}</p>
            <p>Street: {address.street}, City: {address.city}</p>
        </div>
    );
};

export default UserDetails;