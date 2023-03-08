import { DashboardHeaderTypes } from "../../types";
import DashboardHeader from "./DashboardHeader";
import { fireEvent, render, screen } from "@testing-library/react";

describe("DashboardHeader", () => {
  // Arrange
  it("should render all header elements", async () => {
    const setIsLightMode = jest.fn();
    const isLightMode: boolean = false;

    const props: DashboardHeaderTypes = {
      setIsLightMode,
      isLightMode,
    };

    render(<DashboardHeader {...props} />);

    // Act
    const dashboardTitle = await screen.findByText(/Social Media Dashboard/i);
    const totalFollowers = await screen.findByText(/Total Followers: 23,004/i);
    const darkModeSwitchBtn = screen.getByRole("checkbox");

    // Assert
    expect(dashboardTitle).toBeInTheDocument();
    expect(totalFollowers).toBeInTheDocument();
    expect(darkModeSwitchBtn).toBeInTheDocument();
    expect(darkModeSwitchBtn).not.toBeChecked();
  });

  it("checkbox should be checked when clicked", async () => {
    // Arrange
    const setIsLightMode = jest.fn().mockReturnValue(true);
    const isLightMode: boolean = false;

    const dashboardHeaderProps: DashboardHeaderTypes = {
      setIsLightMode,
      isLightMode,
    };

    render(<DashboardHeader {...dashboardHeaderProps} />);

    // Act
    const darkModeSwitchBtn = screen.getByRole("checkbox");

    fireEvent.click(darkModeSwitchBtn);

    // Assert
    expect(darkModeSwitchBtn).toBeChecked();
  });
});
