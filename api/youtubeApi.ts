import axios from 'axios';
import { API_KEY } from '@/localEnvs';

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

export const getVideoDetails = async (videoId: string) => {
    try {
        const response = await youtubeApi.get('/videos', {
            params: {
                part: 'snippet,statistics',
                id: videoId,
            },
        });

        const video = response.data.items?.[0];

        return {
            videoId: video.id,
            videoTitle: video.snippet.title,
            channelTitle: video.snippet.channelTitle,
            description: video.snippet.description,
            viewCount: video.statistics.viewCount,
            likeCount: video.statistics.likeCount,
        };
    } catch (error) {
        console.error('Error during fetching data:', error);
        throw error;
    }
};
