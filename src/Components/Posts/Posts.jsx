import { useLoaderData } from "react-router-dom";

const Posts = () => {
    const loadPosts = useLoaderData()
    return (
        <div>
            <h3>Posts: {loadPosts.length}</h3>
        </div>
    );
};

export default Posts;