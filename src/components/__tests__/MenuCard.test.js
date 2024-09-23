import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "./mocks/ItemsList.json";
import Header from "../Header";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MenuCard from "../MenuCard";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) })
);

it("Should load items with heading Nashta (7)", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <MenuCard />
        </Provider>
      </BrowserRouter>
    );
  });

  const title = screen.getByText("Nashta (7)");

  fireEvent.click(title);

  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(7);
});

it("Should update Cart count when clicked to Add + ", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <MenuCard />
        </Provider>
      </BrowserRouter>
    );
  });

  const title = screen.getByText("Nashta (7)");

  fireEvent.click(title);

  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(7);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });

  expect(screen.getByText("Cart(0)")).toBeInTheDocument();

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart(1)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart(2)")).toBeInTheDocument();
});

it("Should update Cart page when clicked to Add + ", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <MenuCard />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const title = screen.getByText("Nashta (7)");

  fireEvent.click(title);

  const clearCart = screen.getByRole("button", { name: "Clear Cart" });

  fireEvent.click(clearCart);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addBtns[0]);

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart(2)")).toBeInTheDocument();

  const totalFoodItems = screen.getAllByTestId("foodItems");

  expect(totalFoodItems.length).toBe(9);
});
