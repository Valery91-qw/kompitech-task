import {useEffect, useState} from "react";
import {chucknorrisApi, JokeType} from "../../dal/chucknorris-api";
import styles from './Header.module.css'

type HeaderType = {
    currentJoke: JokeType | undefined
}

export const Header = ({currentJoke}: HeaderType) => {

    const [jokeData, setJokeData] = useState<JokeType>()

    useEffect(() => {
        if(currentJoke) {
            setJokeData(currentJoke)
        } else  {
            chucknorrisApi.getJoke()
                .then(res => {
                    if(res) setJokeData(res);
                })
        }
    }, [currentJoke])

    return (
        <header className={styles.container}>
            <img className={styles.logo}
                 src={`https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png`}
                 alt='chack-logo' />
            <h2 className={styles.title}>Joke: </h2>
            <p className={styles.text}>{jokeData?.value}</p>
        </header>
    )
}