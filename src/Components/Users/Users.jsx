import { useLoaderData } from "react-router-dom";
import User from "../User/User";
const Users = () => {

    const myStyle={
        display:'grid',
        gridTemplateColumns: 'repeat(2, auto)',
    }

    const users = useLoaderData()
    // console.log(users)
    return (
        <div >
            <h3>Users: {users.length}</h3>
           <div style={myStyle}>
           {
                users.map(user => <User user={user}></User>)
            }
           </div>
        </div>
    );
};

export default Users;