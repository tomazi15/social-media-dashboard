import { isDailyStatisticsNegative } from "./isDailyStatisticsNegative";

describe("isDailyStatisticsNegative", () => {
  it("should return true if number is negative", () => {
    // Arrange
    const negativeNumber = "-1";

    // Act
    const isNegativeNumber = isDailyStatisticsNegative(negativeNumber);

    // Assert
    expect(isNegativeNumber).toBe(true);
  });

  it("should return false if number is positive", () => {
    // Arrange
    const positiveNumber = "1";

    // Act
    const isNegativeNumber = isDailyStatisticsNegative(positiveNumber);

    // Assert
    expect(isNegativeNumber).toBe(false);
  });
});
