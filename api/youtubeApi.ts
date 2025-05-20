import axios from 'axios';

const API_KEY = '';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

const youtubeApi = axios.create({
    baseURL: BASE_URL,
    params: {
        key: API_KEY,
    },
});

export const searchVideos = async (query: string) => {
    try {
        const response = await youtubeApi.get('/search', {
            params: {
                part: 'snippet',
                q: query,
                type: 'video',
                maxResults: 3,
            },
        });
        return response.data.items;
    } catch (error) {
        console.error('YouTube API error:', error);
        throw error;
    }
};
