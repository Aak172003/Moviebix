import axios from "axios";

// Last wala / nhi lena or uske aage ka 
const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

// headers me bhejne ke lie ,
// Not params ke ander headers or headers me humko bhejna hai 

const headers = {
    Authorization : "bearer " + TMDB_TOKEN,
};

// Write a method                      
// here url, params is like an argument or parameter simply  
export const fetchDataFromApi = async (url, params) => {
    // if Api call is fail , so goes to catch otherwise go to try
    try {
        const {data} = await axios.get(BASE_URL + url, {
            
            headers,
            params
        })
        return data;

    } catch (err) {
        console.log(err);
        return err;
    }
}