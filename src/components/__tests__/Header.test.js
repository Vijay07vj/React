import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header Component Test Cases", () => {
  // beforeAll(() => {
  //   console.log("BeforeAll Called");
  // });
  // beforeEach(() => {
  //   console.log("BeforeEach Called");
  // });
  // afterAll(() => {
  //   console.log("AfterAll Called");
  // });
  // afterEach(() => {
  //   console.log("AfterEach Called");
  // });
  it("Should load the Login Button inside the Header Component ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    //Querying or getting or finding
    const loginButton = screen.getByRole("button");
    //Assertion
    expect(loginButton).toBeInTheDocument();
  });
  it("Should load the cart inside the Header Component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartText = screen.getByText(/🛒/);
    expect(cartText).toBeInTheDocument();
  });
  it("Should change the Login button to logout onClick", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
  });
});
