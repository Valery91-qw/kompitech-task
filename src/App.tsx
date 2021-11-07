import React, {useEffect, useState} from 'react';
import {JokeCategories} from "./view/joke-categories/JokeCategories";
import styles from './App.module.css';
import {chucknorrisApi, JokeType} from "./dal/chucknorris-api";
import {GetJokeButton} from "./view/get-joke-button/GetJokeButton";

function App() {

    const [currentCategory, setCurrentCategory] = useState<string>('')
    const [jokeData, setJokeData] = useState<JokeType>()

    useEffect(() => {
        chucknorrisApi.getJoke()
            .then(res => {
                if (res) setJokeData(res);
            })
    }, [])

    return (
        <div className={styles.container}>
            <img className={styles.logo}
                 src={`https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png`}
                 alt='chack-logo'/>
            <h2 className={styles.title}>Joke:</h2>
            <p className={styles.text}>{jokeData?.value}</p>
            <JokeCategories setCurrentCategory={setCurrentCategory}/>
            <GetJokeButton currentCategory={currentCategory} setJokeData={setJokeData}/>
        </div>
    );
}

export default App;
