import {JokeType} from "../../dal/chucknorris-api";
import styles from "./DisplayJokesArea.module.css";

type DisplayJokesAreaType = {
    jokesByText: Array<JokeType> | undefined
}

export const DisplayJokesArea = ({jokesByText}: DisplayJokesAreaType) => {

    if (jokesByText && jokesByText.length > 0) {

        const displayedJokes = jokesByText.slice(0, 5)

        return (
            <div className={styles.container}>
                {displayedJokes.map((jokeData, index) => {
                    return <span className={styles.span} key={jokeData.id}>{++index}.{jokeData.value}</span>
                })}
            </div>
        )
    } else {
        return <div className={styles.container}>Please input the value</div>
    }
}