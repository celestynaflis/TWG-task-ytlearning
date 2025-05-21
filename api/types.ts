export interface Video {
    id: {
        videoId: string;
    };
    snippet: {
        publishedAt: string;
        title: string;
        description: string;
    };
}

export interface VideoDetails {
    videoId: string;
    videoTitle: string;
    channelTitle: string;
    description: string;
    viewCount: string;
    likeCount: string;
}
