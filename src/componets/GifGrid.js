import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category}) => {

    const [images, setImages] = useState([]);

    const getGifs = async () => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=Nr4bfrgRK7obHM3O68YwvQ2iUmuxi8Yj';
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })

        console.log(gifs);
        setImages(gifs);
    }
    useEffect( () => {
        getGifs();
    }, []);

    return (
        <>
            <h3>{ category }</h3>
            <div className='card-grid'>
                    {
                        images.map(img => (
                            <GifGridItem 
                            {...img}
                            key={img.id}/>
                        ))
                    }
            </div>
        </>
    )
}
