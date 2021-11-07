import {ChangeEvent, useEffect, useState} from "react";
import styles from "./GetJokeTextInput.module.css";
import {chucknorrisApi, JokeType} from "../../dal/chucknorris-api";

type GetJokeTextInputType = {
    setJokesByText: (jokes: Array<JokeType>) => void
}


export const GetJokeTextInput = ({ setJokesByText }: GetJokeTextInputType) => {

    const [fetchJokeValue, setFetchJokeValue] = useState<string>()

    const setSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value)
        setFetchJokeValue(event.currentTarget.value)
    }

    useEffect(() => {
        if(fetchJokeValue && fetchJokeValue.length > 2) {
            const timerId = setTimeout(() => {
                chucknorrisApi.getJokeByText(fetchJokeValue)
                    .then((res) => {
                        if(res) setJokesByText(res.result)
                    })
            }, 600)
            return () => {
                clearTimeout(timerId)
            }
        } else {
            return () => {
                setJokesByText([])
            }
        }
    }, [fetchJokeValue, setJokesByText])

    return (
        <input className={styles.input}
               onChange={setSearchValue}
               minLength={3}
               placeholder='More then 2 symbols'/>
    )
}