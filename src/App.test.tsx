import React from "react";
import App from "./App";
import { fireEvent, render, screen } from "@testing-library/react";

describe("App", () => {
  it("should change the dashboard to light mode", async () => {
    // Arrange
    render(<App />);

    // Act
    const darkModeSwitchBtn = await screen.findByRole("checkbox");

    await fireEvent.click(darkModeSwitchBtn);

    const darkModeElement = await screen.findByText(/Social Media Dashboard/i);

    // Assert
    expect(darkModeSwitchBtn).toBeChecked();
    expect(darkModeElement).toHaveClass("text-black");
  });
});
