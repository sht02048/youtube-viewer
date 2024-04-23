import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface YoutubeKeywordState {
  youtubeKeyword: string
}

const youtubeKeywordStore = (set: (newState: Partial<YoutubeKeywordState>) => void) => ({
  youtubeKeyword: "",
  setYoutubeKeyword: (keyword: string) => set({youtubeKeyword: keyword})
});

const useYoutubeKeywordStore = create(devtools(youtubeKeywordStore));

export default useYoutubeKeywordStore;
