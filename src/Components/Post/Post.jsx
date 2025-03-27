import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {title,id} = post;
    const postStyle={
         border: '2px solid green',
        margin:'3px'
    }
    const navigate = useNavigate();

    const handleDetails =()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h3>id: {id}</h3>
            <h4>title: {title}</h4>
            <Link to={`/post/${id}`}>
            <button>Details</button>
            </Link>
            <button onClick={handleDetails}>Details...</button>
        </div>
    );
};

export default Post;