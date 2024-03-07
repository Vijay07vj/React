import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../__tests__/mocks/ResCardMock.json";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with propsData", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("The Red Box");
  expect(name).toBeInTheDocument();
});
//Should render with the promoted label (need to test the higher order component with the promoted label)
//Home Work
// it("Should render promoted label in the Restaurant card", () => {
//   render(<RestaurantCard resData={MOCK_DATA} />);
//   const name = screen.getByTestId("promoLabel");
//   expect(name).toBeInTheDocument();
// });
