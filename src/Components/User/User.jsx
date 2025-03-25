const User = ({user}) => {
    const myStyle={
        border: '2px solid red',
        margin:'2px'
    }
    const {name,email}=user
    return (
        <div style={myStyle}>
            <h2>name: {name}</h2>
            <p>Email: {email}</p>
        </div>
    );
};

export default User;