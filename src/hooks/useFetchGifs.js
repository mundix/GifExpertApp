// Se puede hacer con un rfac y borrar para dejarlo asi.
import { useState, useEffect } from "react";
import {getGifs} from '../Helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading:true
    });
    //los efectos no pueden ser async por que esperan algo sincrono
    useEffect(() => {

        //Aqui se hace la peticion y traer las imagenes
        getGifs(category)
        .then( imgs => {

            setTimeout(() => {
                setState({
                    data: imgs,
                    loading: false
                });
            }, 3000);

            
        });

    }, [category]);

    

    return state; //retorna le objeto de arriba {data:[], loading:true}
}
