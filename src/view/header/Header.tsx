import styles from "./Header.module.css";
import React from "react";
import {JokeType} from "../../dal/chucknorris-api";

type HeaderType = {
    jokeData: JokeType | undefined
}

export const Header = ({jokeData}: HeaderType) => {

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