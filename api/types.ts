export interface Video {
    id: {
        videoId: string;
        kind: string;
    };
    snippet: {
        publishedAt: Date;
        title: string;
        description: string;
    };
    channelTitle: string;
    channelDescription: string;
    statistics: {
        viewCount: string;
        likeCount: string;
    };
}
