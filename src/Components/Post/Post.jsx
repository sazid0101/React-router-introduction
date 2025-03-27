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
        </div>
    );
};

export default Post;