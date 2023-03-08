import LargeCard from "./LargeCard";
import { LARGE_CARD_DATA } from "../../utils/data";
import { LargeCardPropsType } from "../../types";
import { render, screen } from "@testing-library/react";

describe("LargeCard", () => {
  // Arrange
  const oneCardData = {
    data: [
      {
        id: 0,
        socialPlatform: "facebook",
        icon: "facebookLogo",
        user: "@nathanf",
        followersStatistics: "1987",
        followersTitle: "Followers",
        dailyStatistics: "12",
        borderColor: "border-[#198ff5]",
      },
    ],
  };

  const isLightMode: boolean = false;

  it("should render all card elements", async () => {
    const props: LargeCardPropsType = {
      cardData: oneCardData,
      isLightMode,
    };

    render(<LargeCard {...props} />);

    // Act
    const cardLogo = screen.getByRole("facebookLogo");
    const cardUser = await screen.findByText(/@nathanf/i);
    const followersStatistics = await screen.findByText(/1987/i);
    const followersTitle = await screen.findByText(/Followers/i);
    const dailyStatistics = await screen.findByText(/12/i);
    const dailyStatisticsTitle = await screen.findByText(/Today/i);

    // Assert
    expect(cardLogo).toBeInTheDocument();
    expect(cardUser).toBeInTheDocument();
    expect(followersStatistics).toBeInTheDocument();
    expect(followersTitle).toBeInTheDocument();
    expect(dailyStatistics).toBeInTheDocument();
    expect(dailyStatisticsTitle).toBeInTheDocument();
  });

  it("should render multiple cards", async () => {
    // Arrange
    const props: LargeCardPropsType = {
      cardData: LARGE_CARD_DATA,
      isLightMode,
    };

    render(<LargeCard {...props} />);

    // Act
    const dailyStatisticsTitle = await screen.findAllByText(/Today/i);

    // Assert
    expect(dailyStatisticsTitle.length).toBe(4);
  });
});
