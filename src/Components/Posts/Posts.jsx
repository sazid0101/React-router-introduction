import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const loadPosts = useLoaderData()
    const postsStyle={
        display:'grid',
        gridTemplateColumns: 'repeat(2, auto)',
    }
    return (
        <div >
            <h3>Posts: {loadPosts.length}</h3>
            <div style={postsStyle}>
                {
                    loadPosts.map(post => <Post post ={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;