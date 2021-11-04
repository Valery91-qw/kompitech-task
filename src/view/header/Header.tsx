import {useEffect, useState} from "react";
import {chucknorrisApi, RandomJokeType} from "../../dal/chucknorris-api";
import styles from './Header.module.css'

export const Header = () => {

    const [randomJokeData, setRandomJokeData] = useState<RandomJokeType>()

    useEffect(() => {
        chucknorrisApi.getRandomJoke()
            .then(res => {
                if(res) setRandomJokeData(res);
            })
    }, [])

    return (
        <header className={styles.container}>
            <img className={styles.logo}
                 src={`https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png`}
                 alt='chack-logo'
            />
            <h2 className={styles.title}>Joke: </h2>
            <p className={styles.text}>
                {randomJokeData?.value}
            </p>
        </header>
    )
}