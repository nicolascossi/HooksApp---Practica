import { useEffect, useState } from "react"


const localCache = {
    
}


export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    });

    useEffect(() => {
        getFetch()
    },[url])

    const setLoadingState = () => {
        setState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
        })
    }

    const getFetch = async () => {

        if(localCache[url]) {
            console.log('Usando cache')
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null
            })
            return;
        }

        setLoadingState()
        
        const response = await fetch(url)

        await new Promise(resolve => setTimeout(resolve,500)) 

        if(!response.ok){
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                message: response.status
            })
            return
        }
        const data = await response.json()
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null

        })

        // Manejo del cache
        localCache[url] = data;
    }


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }

}

