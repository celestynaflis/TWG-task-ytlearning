export interface Video {
    id: {
        videoId: string;
        kind: string;
    };
    snippet: {
        publishedAt: string;
        title: string;
        description: string;
        channelTitle: string;
    };
    statistics: {
        viewCount: string;
        likeCount: string;
    };
}
