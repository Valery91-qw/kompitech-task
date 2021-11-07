import styles from "./Header.module.css";
import React, {useEffect} from "react";
import {chucknorrisApi, JokeType} from "../../dal/chucknorris-api";

type HeaderType = {
    jokeData: JokeType | undefined
    setJokeData: (joke: JokeType) => void
}

export const Header = ({jokeData, setJokeData}: HeaderType) => {

    useEffect(() => {
        chucknorrisApi.getJoke()
            .then(res => {
                if (res) setJokeData(res);
            })
    }, [setJokeData])

    return (
        <>
            <img className={styles.logo}
                 src={`https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png`}
                 alt='chack-logo'/>
            <h2 className={styles.title}>Joke:</h2>
            <p className={styles.text}>{jokeData?.value}</p>
        </>
    )
}