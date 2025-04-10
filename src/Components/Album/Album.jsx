const Album = ({album}) => {
    const {id,title}= album
    return (
        <div>
            <h4>Album</h4>
            <p>{id}</p>
            <p>{title}</p>
        </div>
    );
};

export default Album;