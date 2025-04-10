import { useLoaderData } from "react-router-dom";
import Album from "../Album/Album";
const Albums = () => {
    const loadAlbums = useLoaderData()

    const albumsStyle={
        display:'grid',
        gridTemplateColumns: 'repeat(4, auto)',
    }
    return (
        <div>
            <h3>Albums</h3>
            <p>{loadAlbums.length}</p>
            <div style={albumsStyle}>
            {
                loadAlbums.map((album,index)=> <Album key={index} album={album}></Album>)
            }
            </div>
        </div>
    );
};

export default Albums;