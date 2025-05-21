# YouTube Learn

### A simple React Native app for searching YouTube videos

This is a React Native app built with Expo, allowing users to search for YouTube videos using the YouTube Data API v3.

### Features
- Search for videos
- Sort videos by newest or oldest (by published date)
- View video details (description, channel name, and statistics)
- Video player (with a sample video)


### Tech Stack
- React Native
- Expo
- TypeScript


### Libraries Used
- [Axios](https://axios-http.com/docs/intro)
- [React Native Video](https://docs.thewidlarzgroup.com/react-native-video)
- [Prettier](https://prettier.io/docs/configuration)


### API
- [YouTube Data API v3](https://developers.google.com/youtube/v3/docs)


## 🚀 Launching

1. **Get a YouTube API Key**  
   Go to [Google Cloud Console](https://console.cloud.google.com/welcome), create a project, and enable the **YouTube Data API v3**.  
   Then generate your personal API key.

2. **Create a local config file**  
   In the root folder, create a file named `localEnvs.ts` and paste your key as follows:

   ```ts
   export const API_KEY = 'your_key_here';

3. **Install dependencies**
   In the project root, run:
   ```npm install```

5. **Run the app**
   To launch the app on Android Emulator:
   ```npx expo run:android```

7. **Enjoy :)**

