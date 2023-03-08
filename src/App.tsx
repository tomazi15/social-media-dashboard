import React, { useState } from "react";
import SmallCard from "./components/SmallCard/SmallCard";
import LargeCard from "./components/LargeCard/LargeCard";
import DashboardHeader from "./components/DashboardHeader/DashboardHeader";
import { SMALL_CARD_DATA, LARGE_CARD_DATA } from "./utils/data";

const App = (): JSX.Element => {
  const [isLightMode, setIsLightMode] = useState<boolean>(false);

  return (
    <div
      className={`flex flex-col items-center p-4 gap-4  ${
        isLightMode ? "bg-white" : "bg-bottomBg"
      }`}
    >
      <DashboardHeader
        setIsLightMode={setIsLightMode}
        isLightMode={isLightMode}
      />
      <div className="md:flex w-full space-y-4 md:space-y-0 md:gap-4 pb-8">
        <LargeCard cardData={LARGE_CARD_DATA} isLightMode={isLightMode} />
      </div>

      <div className="md:flex md:flex-col w-full md:h-screen">
        <div className="md:flex pb-4">
          <h1
            className={` text-2xl font-bold ${
              isLightMode ? "text-black" : "text-white"
            }`}
          >
            Overview - Today
          </h1>
        </div>
        <div className="md:grid md:grid-rows-2 md:grid-flow-col md:gap-4 md:space-y-0 space-y-4">
          <SmallCard cardData={SMALL_CARD_DATA} isLightMode={isLightMode} />
        </div>
      </div>
    </div>
  );
};

export default App;
