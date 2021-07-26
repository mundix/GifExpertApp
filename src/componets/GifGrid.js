import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../Helpers/getGifs';
// import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category}) => {

    // const [images, setImages] = useState([]);
    
    // useEffect( () => {
    //     getGifs(category)
    //     .then( setImages); //lo mismo de abajo
    //     // .then( imgs => setImages(imgs));
    // }, []);

    const {data, loading} = useFetchGifs();

    return (
        <>
            <h3>{ category }</h3>
            {loading ? 'Cargando ...' : 'DataLoaded '}
            <div className='card-grid'>
                    {
                        // images.map(img => (
                        //     <GifGridItem 
                        //     {...img}
                        //     key={img.id}/>
                        // ))
                    }
            </div>
        </>
    )
}
