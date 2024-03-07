import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../__tests__/mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Load Restaurant Menu Component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });
  const accordianHeader = screen.getByText("Chicken Chizza(5)");
  fireEvent.click(accordianHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(5);
  expect(screen.getByText("🛒[0]")).toBeInTheDocument();
  const addBtns = screen.getAllByRole("button", { name: "ADD +" });
  //   console.log(addBtns.length);
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("🛒[1]")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("🛒[2]")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(7);
  const clearCartBtn = screen.getByRole("button", { name: "ClearCart" });
  fireEvent.click(clearCartBtn);
  expect(screen.getAllByTestId("foodItems").length).toBe(5);
  expect(screen.getByText("Your cart is empty!!!")).toBeInTheDocument();
});
