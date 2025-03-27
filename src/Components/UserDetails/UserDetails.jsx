import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData()
    // console.log(dataLoad)
    const {name,email,address,company} =user
    const myStyle={
        border: '2px solid green',
        margin:'2px'
    }
    return (
        <div style={myStyle}>
            <h3>User Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Street: {address.street}, City: {address.city}</p>
            <p>Company: {company.name}</p>
        </div>
    );
};

export default UserDetails;