import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [info,setInfo] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error("Could not fetch the data.");
            }
            return res.json();
        })
        .then(data => {
            setInfo(data);
            setIsLoading(false);
            setError(null);
        })
        .catch(err => {
            setIsLoading(false);
            setError(err.message); 
        })
    },[url]);

    return {info,isLoading,error};
}

export default useFetch;