export type LargeSocialMediaCardType = {
  id: number;
  socialPlatform: string;
  icon: string;
  user: string;
  followersStatistics: string;
  followersTitle: string;
  dailyStatistics: string;
  borderColor: string;
};

export type LargeSocialMediaCardDataType = {
  data: LargeSocialMediaCardType[];
};

export type LargeCardPropsType = {
  cardData: LargeSocialMediaCardDataType;
  isLightMode: boolean;
};
