export type SmallSocialMediaCardType = {
  id: number;
  socialPlatform: string;
  icon: string;
  statisticsTitle: string;
  statistics: string;
  dailyStatistics: string;
};

export type SmallSocialMediaCardDataType = {
  data: SmallSocialMediaCardType[];
};

export type SmallCardPropsType = {
  cardData: SmallSocialMediaCardDataType;
  isLightMode: boolean;
};
