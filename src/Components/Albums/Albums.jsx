import { useLoaderData } from "react-router-dom";
import Album from "../Album/Album";
const Albums = () => {
    const loadAlbums = useLoaderData()
    return (
        <div>
            <h3>Albums</h3>
            <p>{loadAlbums.length}</p>
            {
                loadAlbums.map((album,index)=> <Album key={index} album={album}></Album>)
            }
        </div>
    );
};

export default Albums;