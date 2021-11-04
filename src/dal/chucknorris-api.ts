import axios from 'axios';

export const chucknorrisApi = {
    getRandomJoke() {
       return axios.get<RandomJokeType>(`https://api.chucknorris.io/jokes/random`)
            .then(result => {
                return result.data
            })
            .catch(err => {
                console.error(err)
            })
    }
}



export type RandomJokeType = {
    categories: Array<string>,
    created_at: Date,
    icon_url: string
    id: string
    updated_at: Date
    url: string
    value: string
}
