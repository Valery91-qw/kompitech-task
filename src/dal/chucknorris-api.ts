import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes/'
})

export const chucknorrisApi = {

    getJoke(category?: string) {
       return instance.get<JokeType>(`random`, {
           params: {
               category: category,
           }})
            .then(result => {
                return result.data
            })
            .catch(err => {
                console.error(err)
            })
    },

    getCategories() {
        return instance.get<Array<string>>(`categories`)
            .then(result => result.data)
            .catch(err => {
                console.error(err)
            })
    },

    getJokeByText(text: string) {
        return instance.get<JokeByTextType<JokeType>>(`search`, {
            params: {
                query: text
            }
        })
            .then(result => result.data)
            .catch(err => {
                console.error(err)
            })
    }
}

export type JokeType = {
    categories: Array<string>,
    created_at: Date,
    icon_url: string
    id: string
    updated_at: Date
    url: string
    value: string
}

export type JokeByTextType<J> = {
    total: number
    result: Array<J>
}