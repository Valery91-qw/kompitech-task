import styles from "./GetJokeButton.module.css";
import React from "react";
import {chucknorrisApi, JokeType} from "../../dal/chucknorris-api";

type GetJokeButtonType = {
    currentCategory: string
    setJokeData: (joke: JokeType) => void
}

export const GetJokeButton = ({currentCategory, setJokeData}: GetJokeButtonType) => {

    const fetchJoke = () => {
        if (currentCategory === 'random' || currentCategory === '') {
            chucknorrisApi.getJoke().then(result => {
                if (result) setJokeData(result)
            })
        } else {
            chucknorrisApi.getJoke(currentCategory).then(result => {
                if (result) setJokeData(result)
            })
        }
    }

    return (
        <button className={styles.button} onClick={fetchJoke}>Get Joke</button>
    )
}