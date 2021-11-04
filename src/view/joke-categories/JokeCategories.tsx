import {useEffect, useState} from "react";
import {chucknorrisApi} from "../../dal/chucknorris-api";

export const JokeCategories = () => {

    const [categories, setCategories] = useState<Array<string>>()

    useEffect(() => {
        chucknorrisApi.getCategories()
            .then(result => {
                if(result) {
                    const allCategories = ['random', ...result]
                    setCategories(allCategories)
                }
            })
    }, [])

    return (
        <>
            <select>
                {categories?.map((category) => {
                    if(category === 'random') {
                        return <option key={category} selected>{category}</option>
                    } else {
                        return <option key={category}>{category}</option>
                    }
                })}
            </select>
        </>
    )
}