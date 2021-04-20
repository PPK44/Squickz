import { useEffect, useState } from "react";

// Custom hook to get the api and its status
// User inserts a url
// Once the data has loaded it then sets the data to y(which is our text from the api) and loading to false
// This is used in Footer.js
export const useFetch = url => {
    const [state, setState] = useState({ data:null, loading: true});
    
    useEffect(() => {
        setState(state => ({data: state.data, loading: true}));
        fetch(url)
            .then(x => x.text())
            .then(y => {
                // console.log(y);
            setState({data: y, loading: false});
        }); 
    }, []);

    return state;
};