import SmallCard from "./SmallCard";
import { SMALL_CARD_DATA } from "../../utils/data";
import { SmallCardPropsType } from "../../types";
import { render, screen } from "@testing-library/react";

describe("SmallCard", () => {
  const oneCardData = {
    data: [
      {
        id: 0,
        socialPlatform: "facebook",
        icon: "facebookLogo",
        statisticsTitle: "Page Views",
        statistics: "87",
        dailyStatistics: "3",
      },
    ],
  };

  const isLightMode: boolean = false;

  it("should render all card elements", async () => {
    // Arrange
    const props: SmallCardPropsType = {
      cardData: oneCardData,
      isLightMode,
    };

    render(<SmallCard {...props} />);

    // Act
    const cardLogo = screen.getByRole("facebookLogo");
    const cardStatsTitle = await screen.findByText(/Page Views/i);
    const cardStats = await screen.findByText(/87/i);
    const cardDailyStatistics = await screen.findByText(/3/i);

    // Assert
    expect(cardLogo).toBeInTheDocument();
    expect(cardStatsTitle).toBeInTheDocument();
    expect(cardStats).toBeInTheDocument();
    expect(cardDailyStatistics).toBeInTheDocument();
  });

  it("should render multiple cards", async () => {
    // Arrange
    const props: SmallCardPropsType = {
      cardData: SMALL_CARD_DATA,
      isLightMode,
    };

    render(<SmallCard {...props} />);

    // Act
    const dailyStatisticsCards = await screen.findAllByText(/%/i);

    // Assert
    expect(dailyStatisticsCards.length).toBe(8);
  });
});
