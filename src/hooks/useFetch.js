import { useEffect, useState } from "react"


export const useFetch = (URL) =>{

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    })

    useEffect(()=>{

        getFetch();

    }, [URL]);



    const getFetch = async() => {

        const resp = await fetch(URL, {
            method: 'GET'
          });

        if(!resp.ok){
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error:{
                    code: resp.status,
                    message: resp.statusText
                }
            })

            return;
        }

        
        const data = await resp.json();

        
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        })
    }


    //Manejo del cache

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }

}