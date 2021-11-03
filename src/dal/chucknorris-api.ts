import axios from 'axios';

export const chucknorrisApi = {
    getRandomJoke() {
        return axios.get(`https://api.chucknorris.io/jokes/random`)
    }
}