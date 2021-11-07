import {ChangeEvent, useEffect, useState} from "react";
import {chucknorrisApi} from "../../dal/chucknorris-api";
import styles from './JokeCategories.module.css';

type JokeCategoriesType = {
    setCurrentCategory: (category: string) => void
}

export const JokeCategories = ({setCurrentCategory}: JokeCategoriesType) => {

    const [categories, setCategories] = useState<Array<string>>();

    useEffect(() => {
        chucknorrisApi.getCategories()
            .then(result => {
                if (result) {
                    const allCategories = ['random', ...result]
                    setCategories(allCategories)
                }
            })
    }, []);

    function setCategory(event: ChangeEvent<HTMLSelectElement>) {
        setCurrentCategory(event.currentTarget.value)
    }

    return (
        <select onChange={setCategory}
                className={styles.select}
                defaultValue={categories?.find((el) => el === 'random')}>

            {categories?.map((category) => {
                return <option className={styles.option} key={category}>{category}</option>
            })}

        </select>
    );
};