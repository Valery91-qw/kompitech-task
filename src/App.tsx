import React, {useEffect, useState} from 'react';
import {chucknorrisApi, RandomJokeType} from "./dal/chucknorris-api";

function App() {

    const [randomJokeData, setRandomJokeData] = useState<RandomJokeType>( )

    useEffect(() => {
        chucknorrisApi.getRandomJoke()
            .then(res => {
                setRandomJokeData(res.data)
            })
    }, [])

    return (
        <div className="App">
            <img src={randomJokeData?.icon_url}/>
            <p>{randomJokeData?.value}</p>
        </div>
    );
}

export default App;
