import axios from 'axios';

export const chucknorrisApi = {
    getJoke(category?: string) {
       return axios.get<JokeType>(`https://api.chucknorris.io/jokes/random`, {
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
        return axios.get<Array<string>>(`https://api.chucknorris.io/jokes/categories`)
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
