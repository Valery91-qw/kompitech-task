import React, {useState} from 'react';
import {JokeCategories} from "./view/joke-categories/JokeCategories";
import styles from './App.module.css';
import {JokeType} from "./dal/chucknorris-api";
import {GetJokeButton} from "./view/get-joke-button/GetJokeButton";
import {Header} from "./view/header/Header";

function App() {

    const [currentCategory, setCurrentCategory] = useState<string>('')
    const [jokeData, setJokeData] = useState<JokeType>()

    return (
        <div className={styles.container}>
            <Header jokeData={jokeData} setJokeData={setJokeData}/>
            <JokeCategories setCurrentCategory={setCurrentCategory}/>
            <GetJokeButton currentCategory={currentCategory} setJokeData={setJokeData}/>
        </div>
    );
}

export default App;
