export type DataType = {
  type: string;
  video: {
    author: {
      avatar: {
        height: number;
        width: number;
        url: string;
      }[];
      badges: {
        text: string;
        type: string;
      };
      canonicalBaseUrl: null;
      channelId: string;
      title: string;
    };
    badges: string[];
    descriptionSnippet: string;
    isLiveNow: boolean;
    lengthSeconds: boolean;
    movingThumbnails: {
      height: number;
      url: string;
      width: number;
    }[];
    publishedTimeText: string;
    stats: {
      views: number;
    };
    thumbnails: {
      height: number;
      width: number;
      url: string;
    }[];
    title: string;
    videoId: string;
  };
};

export type FilterGroup = {
  filters: {
    cursorSelect: string;
    label: string;
    selected: boolean;
  };
  title: string;
};

export type ResponseObject = {
  contents: DataType[];
  cursorNext: string;
  didYouMean: null;
  estimatedResults: number;
  filterGroups: FilterGroup[];
  refinements: [];
};
