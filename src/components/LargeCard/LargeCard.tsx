import React, { FC } from "react";
import { LargeCardPropsType, LargeSocialMediaCardType } from "../../types";
import SvgExporter from "../SvgExporter/SvgExporter";
import { isDailyStatisticsNegative } from "../../utils/isDailyStatisticsNegative";

const LargeCard: FC<LargeCardPropsType> = ({
  cardData,
  isLightMode,
}: LargeCardPropsType): JSX.Element => {
  return (
    <>
      {cardData.data.map((card: LargeSocialMediaCardType) => {
        return (
          <div
            key={card.id}
            className={`flex flex-col justify-center bg-cardBg h-[25vh] w-full rounded  border-t-4 ${
              card.borderColor
            } ${
              isLightMode
                ? "bg-cardLightBg text-black"
                : "bg-cardBg text-white "
            }`}
          >
            <div className="flex justify-center items-center gap-2 pb-6">
              <SvgExporter logoName={card.icon} />
              <p
                className={`text-xs  font-bold ${
                  isLightMode ? "text-cardLightTextColor" : "text-textBlue"
                }`}
              >
                {card.user}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-6xl font-bold">{card.followersStatistics}</p>
              <p
                className={`text-xs uppercase font-normal tracking-[0.3rem] ${
                  isLightMode ? "text-cardLightTextColor" : "text-textBlue"
                }`}
              >
                {card.followersTitle}
              </p>
            </div>

            <div
              className={`flex justify-center items-center pt-6 text-xs ${
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
              <p className="pr-1">{`${card.dailyStatistics
                .split("-")
                .pop()}`}</p>
              <p>Today</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default LargeCard;
