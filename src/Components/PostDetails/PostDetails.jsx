import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id,title,body} = post;
    const detailsStyle={
        border: '2px solid blue',
       margin:'3px'
   }

   const navigate = useNavigate();
    const handleGoBack =()=>{
        navigate(-1)
    }
    return (
        <div style={detailsStyle}>
            <h3>Id: {id}</h3>
            <h4>Title: {title}</h4>
            <p>Body: {body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;