// Se puede hacer con un rfac y borrar para dejarlo asi.

import { useState } from "react"

export const useFetchGifs = () => {
    const [state, setstate] = useState({
        data: [],
        loading:true
    });

    setTimeout(() => {
        setstate({
            data: [1,2,3,4,5],
            loading:false
        })
    }, 3000);

    return state; //retorna le objeto de arriba {data:[], loading:true}
}
