import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData()
    // console.log(dataLoad)
    const {name} =user
    return (
        <div>
            <h4>User Details: {name}</h4>
        </div>
    );
};

export default UserDetails;