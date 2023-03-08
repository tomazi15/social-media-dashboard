import React, { FC } from "react";
import SvgExporter from "../SvgExporter/SvgExporter";
import { SmallSocialMediaCardType, SmallCardPropsType } from "../../types";
import { isDailyStatisticsNegative } from "../../utils/isDailyStatisticsNegative";

const SmallCard: FC<SmallCardPropsType> = ({
  cardData,
  isLightMode,
}: SmallCardPropsType): JSX.Element => {
  return (
    <>
      {cardData.data.map((card: SmallSocialMediaCardType) => {
        return (
          <div
            key={card.id}
            className={`flex justify-between items-center w-full h-[15vh] bg-cardBg rounded p-6 ${
              isLightMode ? "bg-cardLightBg" : "bg-cardBg"
            }`}
          >
            <div className="flex flex-col h-full">
              <p
                className={`text-xs  font-bold flex-1 ${
                  isLightMode ? "text-cardLightTextColor" : "text-textBlue"
                }`}
              >
                {card.statisticsTitle}
              </p>
              <p
                className={`text-2xl  font-bold ${
                  isLightMode ? " text-black" : " text-white "
                }`}
              >
                {card.statistics}
              </p>
            </div>
            <div className="flex flex-col h-full">
              <div className="flex justify-center flex-1 w-[55px] ">
                <SvgExporter logoName={card.icon} />
              </div>
              <p
                className={`flex items-center justify-center text-green text-xs font-bold h-[30px] ${
                  isDailyStatisticsNegative(card.dailyStatistics)
                    ? "text-red"
                    : "text-green"
                }`}
              >
                <span className="pr-1">
                  <SvgExporter
                    logoName={
                      isDailyStatisticsNegative(card.dailyStatistics)
                        ? "arrowDown"
                        : "arrowUp"
                    }
                  />
                </span>

                {`${card.dailyStatistics.split("-").pop()}%`}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SmallCard;
