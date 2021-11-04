import React, {useState} from 'react';
import {Header} from "./view/header/Header";
import {JokeCategories} from "./view/joke-categories/JokeCategories";
import styles from './App.module.css';
import {chucknorrisApi, JokeType} from "./dal/chucknorris-api";

function App() {

    const [currentCategory, setCurrentCategory] = useState<string>('')
    const [currentJoke, setCurrentJoke] = useState<JokeType>()

    const fetchJoke = () => {
        if(currentCategory === 'random' || currentCategory === '') {
            chucknorrisApi.getJoke().then(result => {
                if(result) setCurrentJoke(result)
            })
        }
        chucknorrisApi.getJoke(currentCategory).then(result => {
            if(result) setCurrentJoke(result)
        })
    }

    return (
        <div className={styles.container}>
            <Header currentJoke={currentJoke}/>
            <JokeCategories setCurrentCategory={setCurrentCategory} />
            <button className={styles.getJokeButton} onClick={fetchJoke}>Get Joke</button>
        </div>
    );
}

export default App;
