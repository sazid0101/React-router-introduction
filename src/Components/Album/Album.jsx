const Album = ({album}) => {
    const {id,title}= album

    const postStyle={
        border: '2px solid green',
       margin:'3px'
   }
    return (
        <div style={postStyle}>
            <h4>Album</h4>
            <p>{id}</p>
            <p>{title}</p>
        </div>
    );
};

export default Album;