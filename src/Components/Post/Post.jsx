import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {title,id} = post;
    const postStyle={
         border: '2px solid green',
        margin:'3px'
    }
    return (
        <div style={postStyle}>
            <h3>id: {id}</h3>
            <h4>title: {title}</h4>
            <Link to={`/post/${id}`}>
            <button>Details</button>
            </Link>
        </div>
    );
};

export default Post;