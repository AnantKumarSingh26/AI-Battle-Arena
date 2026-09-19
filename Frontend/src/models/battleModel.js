import axios from 'axios'

const API_URL = 'http://localhost:3000/graph'

export const fetchBattleResult = async (question) => {
    try {
        const response = await axios.post(API_URL, {
            prompt: question
        });
        return (response.data)
    } catch (error) {
        console.error('API Fetch Error ', error);
        throw error;
    }
}