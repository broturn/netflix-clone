import React, { useState, useEffect } from 'react';
import axios from "./axios";

function Row({ title, fetchURL }) {
    const [movies, setMovies] = useState([]);

    // A snippet of code which runs based on a specific condition/varaible
    useEffect(() => {
        // if [], run once when the row loads, and do not run again

            async function fetchData() {
                const request = await axios.get(fetchURL);
                console.log(request);
                return request;
            }
            fetchData();
    }, []);

    return (
        <div className="row">
            
            <h2>{title}</h2>
            {fetchURL}
            {/* container -> posters */}

        </div>
    )
}

export default Row
 
// 56:17