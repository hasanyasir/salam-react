import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "./mocks/RestaurantList.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render 3 restaurnt cards when searched with biryani keyword", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const searchButton = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("search-input");

  fireEvent.change(searchInput, { target: { value: "biryani" } });

  fireEvent.click(searchButton);

  const searchCards = screen.getAllByTestId("rest-card");

  expect(searchCards.length).toBe(3);
});

it("Should render 3 restaurnt cards when Top Rated Restaurants clicked", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const filterButton = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(filterButton);

  const searchCards = screen.getAllByTestId("rest-card");

  expect(searchCards.length).toBe(3);
});
